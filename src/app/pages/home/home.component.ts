import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  createNewUserSpotify: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) {
    this.createNewUserSpotify = this._fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      date: []
    });
  }

}
