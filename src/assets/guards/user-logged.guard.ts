import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { getAuth } from '@firebase/auth';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserLoggedGuard implements CanActivate {

  constructor(
    private _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfUserLogged();
  }

  checkIfUserLogged(): Observable<boolean> {
    return of(getAuth().currentUser).pipe(
      map(user => {
        if (user) {
          return true;
        } else {
          this._router.navigate(['login']);
          return false
        }
      })
    )
  }

}
