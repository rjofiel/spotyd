import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SpotifyUsersService } from 'src/app/pages/spotify-landing/spotify-users.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyUserResolver implements Resolve<boolean> {

  constructor(
    private _router: Router,
    private _spotifyUsersSvc: SpotifyUsersService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const spotifyUserID = route.params.id;
    return this._spotifyUsersSvc.selectedSpotifyUser(+spotifyUserID).pipe(
      tap(spotifyUser => this._spotifyUsersSvc.setSpotifyUser(spotifyUser)),
      map(spotifyUser => spotifyUser !== null),
      catchError( err => {
        console.error(err);
        this._router.navigate(['/']);
        return EMPTY;
      })
    );
  }
}
