import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyUpdateUsersComponent } from './spotify-update-users.component';

const routes: Routes = [
  {
    path: '',
    component: SpotifyUpdateUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotifyUpdateUsersRoutingModule { }
