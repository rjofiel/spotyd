import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { BtnSize } from 'src/assets/directives/model';
import { SpotifyUser, StatusUser } from 'src/assets/interfaces/user-data';
import { SpotifyUsersService } from '../spotify-users.service';

@Component({
  selector: 'app-spotify-users-list',
  templateUrl: './spotify-users-list.component.html',
  styleUrls: ['./spotify-users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpotifyUsersListComponent implements OnInit{

  spotifyUsersList$: Observable<SpotifyUser[] | null> = this._spotifyUsersSvc.getSpotifyUserList().pipe(
    filter(spotifyUserList => spotifyUserList !== null));

  columnsToShow: string[] = ['id','name', 'email', 'date', 'status', 'action'];

  btnSize = BtnSize;

  constructor(
    private _spotifyUsersSvc: SpotifyUsersService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._spotifyUsersSvc.loadSpotifyUserList();
  }

  onSpotifyUserClickedRedirecToEdit(id: number | null): void {
    if (id !== null) this._router.navigate(['/spotify', id, 'edit']);
  }

  onSpotifyUserClickedRemove(id: number | null): void {
    this._spotifyUsersSvc.removeSpotifyUser(id);
  }

  onClickCreateNewSpotifyUser(): void {
    const spotifyUser = this.newSpotifyUser();
    this._spotifyUsersSvc.createNewSpotifyUser(spotifyUser).pipe(
      filter(spotifyUser => !!spotifyUser)
    ).subscribe(spotifyUser => this.onSpotifyUserClickedRedirecToEdit(spotifyUser.id))
  }

  private newSpotifyUser(): SpotifyUser {
    return {
      id: null,
      name: '',
      email: '',
      password: '',
      phone: '',
      startDate: '',
      status: StatusUser.PAID,
      belongsToFamily: ''
    };
  }

}
