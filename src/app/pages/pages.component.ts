import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Auth, User } from '@firebase/auth';
import { UserData } from 'src/assets/interfaces/user-data';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PagesComponent {

  constructor(
    private _auth: AuthService
  ) {
    this._auth.isUserLogged();
  }


}
