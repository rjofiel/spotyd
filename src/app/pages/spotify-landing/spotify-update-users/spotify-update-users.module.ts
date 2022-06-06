import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SpotifyUpdateUsersComponent } from './spotify-update-users.component';
import { SpotifyUpdateUsersRoutingModule } from './spotify-update-users.routing.module';
import {MatSelectModule} from '@angular/material/select';
import { DirectivesModule } from 'src/assets/directives/directives.module';
import {MatDatepickerModule} from '@angular/material/datepicker';

const material = [
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  FormsModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatButtonModule,
  DirectivesModule,
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  declarations: [
    SpotifyUpdateUsersComponent
  ],
  imports: [
    CommonModule,
    SpotifyUpdateUsersRoutingModule,
    ...material
  ],
  providers: [
    MatNativeDateModule
  ],
  exports: [
    SpotifyUpdateUsersComponent
  ]
})
export class SpotifyUpdateUsersModule { }
