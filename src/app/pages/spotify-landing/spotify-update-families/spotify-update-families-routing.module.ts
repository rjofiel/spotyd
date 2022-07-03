import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyUpdateFamiliesComponent } from './spotify-update-families.component';

const routes: Routes = [
  {
    path: '',
    component: SpotifyUpdateFamiliesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotifyUpdateFamiliesRoutingModule { }
