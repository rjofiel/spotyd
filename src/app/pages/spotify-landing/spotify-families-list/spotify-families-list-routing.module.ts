import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyFamiliesListComponent } from './spotify-families-list.component';

const routes: Routes = [
  {
    path: '',
    component: SpotifyFamiliesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotifyFamiliesListRoutingModule { }
