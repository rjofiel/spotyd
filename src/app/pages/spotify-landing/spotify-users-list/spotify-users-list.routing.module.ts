import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyUsersListComponent } from './spotify-users-list.component';

const routes: Routes = [
  {
    path: '',
    component: SpotifyUsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotifyUpdateUsersRoutingModule { }
