import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyFamiliesListComponent } from './spotify-families-list.component';
import { SpotifyFamiliesListRoutingModule } from './spotify-families-list-routing.module';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SharedComponentsModule } from 'src/assets/shared/components/shared-components.module';
import { DirectivesModule } from 'src/assets/directives/directives.module';

const material = [
  MatTableModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule
];

@NgModule({
  declarations: [
    SpotifyFamiliesListComponent
  ],
  imports: [
    CommonModule,
    SpotifyFamiliesListRoutingModule,
    ...material,
    SharedComponentsModule,
    DirectivesModule
  ],
  exports: [
    SpotifyFamiliesListComponent
   ]
})
export class SpotifyFamiliesListModule { }
