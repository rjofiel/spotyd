import { CdkColumnDef } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from 'src/assets/directives/directives.module';
import { SharedComponentsModule } from 'src/assets/shared/components/shared-components.module';
import { SpotifyUsersListComponent } from './spotify-users-list.component';
import { SpotifyUpdateUsersRoutingModule } from './spotify-users-list.routing.module';

const material = [
  MatTableModule,
  ReactiveFormsModule,
  FormsModule,
  MatInputModule
];

@NgModule({
  declarations: [
    SpotifyUsersListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SpotifyUpdateUsersRoutingModule,
    DirectivesModule,
    SharedComponentsModule,
    ...material
  ],
  providers: [CdkColumnDef],
  exports: [SpotifyUsersListComponent]
})
export class SpotifyUsersListModule { }
