import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SpotifyUsersService } from 'src/app/pages/spotify-landing/spotify-users.service';

@Injectable({ providedIn: 'root' })
export class SpotifyFamilyResolver implements Resolve<boolean> {

  constructor(
    private _spotifyUserSvc: SpotifyUsersService,
    private _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const spotifyFamilyID = route.params.id;
    return this._spotifyUserSvc.selectedSpotifyFamily(+spotifyFamilyID).pipe(
      tap(spotifyFamily => this._spotifyUserSvc.setSpotifyFamily(spotifyFamily)),
      map(spotifyFamily => spotifyFamily !== null),
      catchError(err => {
        console.error(err);
        this._router.navigate(['/']);
        return EMPTY;
      })
    );
  }
}
