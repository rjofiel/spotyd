import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyUserResolver } from 'src/assets/shared/resolvers/spotify-user.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadChildren: () => import('./spotify-users-list/spotify-users-list.module').then(m => m.SpotifyUsersListModule)
      },
      {
        path: ':id/edit',
        loadChildren: () => import('./spotify-update-users/spotify-update-users.module').then(m => m.SpotifyUpdateUsersModule),
        resolve: { spotifyUser: SpotifyUserResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotifyLandingRoutingModule { }
