import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BtnSize } from 'src/assets/directives/model';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  formLogin: FormGroup = this._fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]
  });

  btnSize = BtnSize;

  constructor(
    private _fb: FormBuilder
    // private _auth: AuthService,
  ) { }

  click(): void {
    // this._auth.popUp()
  }

}
