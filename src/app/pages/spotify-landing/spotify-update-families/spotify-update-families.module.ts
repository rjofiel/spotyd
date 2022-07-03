import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { DirectivesModule } from 'src/assets/directives/directives.module';
import { SharedComponentsModule } from 'src/assets/shared/components/shared-components.module';
import { SpotifyUpdateFamiliesRoutingModule } from './spotify-update-families-routing.module';
import { SpotifyUpdateFamiliesComponent } from './spotify-update-families.component';

const material = [
  ReactiveFormsModule,
  FormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule
];

@NgModule({
  declarations: [
    SpotifyUpdateFamiliesComponent
  ],
  imports: [
    CommonModule,
    SpotifyUpdateFamiliesRoutingModule,
    SharedComponentsModule,
    DirectivesModule,
  ...material
  ]
})
export class SpotifyUpdateFamiliesModule { }
