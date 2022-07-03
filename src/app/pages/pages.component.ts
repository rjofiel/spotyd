import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ChildActivationStart, NavigationEnd, RouteConfigLoadStart, Router, RouterEvent, Scroll } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, shareReplay, takeUntil, tap } from 'rxjs/operators';
import { CustomIconsService } from 'src/assets/shared/services/custom-icons.service';
import { UrlRoutes } from 'src/assets/url-routes.routes';
import { SpotifyUsersService } from './spotify-landing/spotify-users.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<unknown>();
  private _isNavbarOpened = new BehaviorSubject<boolean>(false);
  private _showOptions = new BehaviorSubject<boolean>(false);
  private _isAppsHidden = new BehaviorSubject<boolean>(false);
  private _urlToHideApps = [UrlRoutes.login];

  @ViewChild('navbar') navbar: ElementRef;
  @ViewChild('apps') apps: MatButton;

  isAppsHidden$ = this._isAppsHidden.asObservable().pipe(shareReplay(1));
  isNavbarOpened$ = this._isNavbarOpened.asObservable().pipe(shareReplay(1));
  showOptions$ = this._showOptions.asObservable().pipe(shareReplay(1));

  urlRoutes = UrlRoutes;

  constructor(
    private _router: Router,
    private _temporarySvc: SpotifyUsersService,
    private _customIconsSvc: CustomIconsService
  ) {
    // this._auth.isUserLogged();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(ev: Event): void {
    if (!this.navbar?.nativeElement?.contains(ev?.target)) {
      if (!this.apps._elementRef.nativeElement?.contains(ev?.target)) {
        this._isNavbarOpened.next(false);
      }
    }
  }

  ngOnInit(): void {
    // this._temporarySvc.loadSpotifyFamilyList();
    // this._temporarySvc.loadSpotifyUserList();
    this._isAppsHidden.next(!this._urlToHideApps.find(url => this._router.url?.includes(url)));
    this.routeChanges();
  }

  ngOnDestroy(): void {
      this._destroy$.next({});
      this._destroy$.complete();
  }

  toggleNavbar(): void {
    this._isNavbarOpened.next(!this._isNavbarOpened.getValue());
  }

  toggleSpotifyMenu(): void {
    this._showOptions.next(!this._showOptions.getValue());
  }

  routeChanges(): void {
    this._router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap((event:  Event | RouterEvent | NavigationEnd | RouteConfigLoadStart | ChildActivationStart | Scroll ) => {
          this._isNavbarOpened.next(false);
          this._showOptions.next(!this._showOptions.getValue());
          this._isAppsHidden.next(!this._urlToHideApps.find(url => (event as NavigationEnd)?.url?.includes(url)));
        }),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }
}
