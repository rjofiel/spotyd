import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { filter, shareReplay, takeUntil } from 'rxjs/operators';
import { BtnSize } from 'src/assets/directives/model';
import { FamilySpotify } from 'src/assets/interfaces/family-data';
import { SpotifyUser, StatusUser } from 'src/assets/interfaces/user-data';
import { SelectorOptions } from 'src/assets/shared/interfaces/model';
import { UtilsService } from 'src/assets/shared/services/utils.service';
import { SpotifyUsersService } from '../spotify-users.service';

@Component({
  selector: 'app-spotify-update-users',
  templateUrl: './spotify-update-users.component.html',
  styleUrls: ['./spotify-update-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotifyUpdateUsersComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<unknown>();

  spotifyUserForm: FormGroup = this._fb.group({
    name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
    email: ['', [Validators.email]],
    password: [''],
    startDate: [''],
    phone: ['', Validators.compose([Validators.required, Validators.minLength(9), Validators.maxLength(9)])],
    status: ['', [Validators.required]],
    belongsToFamily: ['', [Validators.required]]
  });

  startDate = new Date('2022, 0, 1');

  selectorOptions$: Observable<SelectorOptions[]>;

  familiesOptions$: Observable<FamilySpotify[] | null> = this._spotifyUsersSvc.getSpotifyFamilyList$();
  familySelected$: Observable<FamilySpotify | null> = this._spotifyUsersSvc.getSpotifyFamily();

  btnSize = BtnSize;

  constructor(
    private _utilsSvc: UtilsService,
    private _spotifyUsersSvc: SpotifyUsersService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.selectorOptions();
    this._spotifyUsersSvc.loadSpotifyFamilyList();

    this._spotifyUsersSvc.getSpotifyUser().pipe(
      filter(spotifyUser => !!spotifyUser && spotifyUser !== null),
      takeUntil(this._destroy$)
    ).subscribe(spotifyUser => this.spotifyUserLoadInfoToForm(spotifyUser));

  }

  ngOnDestroy(): void {
      this._destroy$.next({});
      this._destroy$.complete();
  }

  selectedFamily(id: number): void {
    this._spotifyUsersSvc.selectedSpotifyFamily(id);
  }

  onClickSaveUser(): void {
    const userInfo: SpotifyUser = this.updateUserFromForm();
    console.log('SAVED', userInfo);
  }

  private updateUserFromForm(): SpotifyUser {
    return {
      id: Math.floor(Math.random() * 10 + 1),
      name: this.spotifyUserForm.get('name')?.value,
      email: this.spotifyUserForm.get('email')?.value,
      password: this.spotifyUserForm.get('password')?.value,
      startDate: this.spotifyUserForm.get('startDate')?.value,
      phone: this.spotifyUserForm.get('phone')?.value,
      status: this.spotifyUserForm.get('status')?.value,
      belongsToFamily: this.spotifyUserForm.get('belongsToFamily')?.value
    };
  }

  private spotifyUserLoadInfoToForm(spotifyUser: SpotifyUser | null): void {
    this.spotifyUserForm.patchValue({
      name: spotifyUser?.name,
      email: spotifyUser?.email,
      password: spotifyUser?.password,
      startDate: spotifyUser?.startDate ? new Date(spotifyUser?.startDate) : this.startDate,
      phone: spotifyUser?.phone,
      status: spotifyUser?.status ? StatusUser[spotifyUser?.status] : null,
      belongsToFamily: null
    });
  }

  private selectorOptions(): void {
    this.selectorOptions$ = this._utilsSvc.optionsForEnum$(StatusUser).pipe(shareReplay(1));
  }
}
