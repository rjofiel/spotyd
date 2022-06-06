import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleAuthProvider, signInWithPopup, getAuth, Auth, User } from 'firebase/auth'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _provider: GoogleAuthProvider;
  private _auth: any;

  constructor(
    private _router: Router
  ) {
    this._auth = getAuth()
    this._provider = new GoogleAuthProvider();
  }

  popUp(): void {
    signInWithPopup(this._auth, this._provider).then(result => {
      console.log('Data', result)
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      console.log(user);
      if (user) {
        this._router.navigate(['home']);
      }

    }).catch(error => {
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error);
    }).finally(() =>
      console.log('Finalize login')
    )
  }

  isUserLogged(): void {
    this._router.navigate(['/home']);

    // getAuth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this._router.navigate(['/home']);
    //   }
    // });
  }


}
