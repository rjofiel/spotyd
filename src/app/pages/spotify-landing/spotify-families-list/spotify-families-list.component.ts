import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FamilySpotify } from 'src/assets/interfaces/family-data';
import { UrlRoutes } from 'src/assets/url-routes.routes';
import { SpotifyUsersService } from '../spotify-users.service';

@Component({
  selector: 'app-spotify-families-list',
  templateUrl: './spotify-families-list.component.html',
  styleUrls: ['./spotify-families-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotifyFamiliesListComponent implements OnInit {

  spotifyFamiliesList$: Observable<FamilySpotify[] | null> = this._spotifyUsersSvc.getSpotifyFamilyList$();
  columnsToShow = ['number', 'email', 'members', 'paidDate', 'action'];

  constructor(
    private _router: Router,
    private _spotifyUsersSvc: SpotifyUsersService
  ) { }

  ngOnInit(): void {
    this._spotifyUsersSvc.loadSpotifyFamilyList();
  }

  onSpotifyFamilyClickedRedirecToEdit(id: number | null): void {
    if (id !== null) this._router.navigate(['/', UrlRoutes.spotify, UrlRoutes.families, id, UrlRoutes.edit]);
  }

  onSpotifyFamilyClickedRemove(id: number | null): void {
    this._spotifyUsersSvc.removeFamilySpotify(id);
  }

  onClickCreateNewSpotifyFamily(): void {
    const spotifyFamily = this.newSpotifyFamily();
    this._spotifyUsersSvc.createNewSpotifyFamily(spotifyFamily).pipe(
      filter(spotifyFamily => !!spotifyFamily)
    ).subscribe(spotifyFamily => this.onSpotifyFamilyClickedRedirecToEdit(spotifyFamily?.number));
  }

  private newSpotifyFamily(): FamilySpotify {
    return {
      number: null,
      email: '',
      address: '',
      paidDate: new Date().toString()
    };
  }


}
