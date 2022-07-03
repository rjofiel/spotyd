import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpotifyFamilyResolver } from 'src/assets/shared/resolvers/spotify-familty.resolver';
import { SpotifyUserResolver } from 'src/assets/shared/resolvers/spotify-user.resolver';

const routes: Routes = [
  {
    path: 'users',
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
  },
  {
    path: 'families',
    children: [
      {
        path: 'list',
        loadChildren: () => import('./spotify-families-list/spotify-families-list.module').then(m => m.SpotifyFamiliesListModule)
      },
      {
        path: ':id/edit',
        loadChildren: () => import('./spotify-update-families/spotify-update-families.module').then(m => m.SpotifyUpdateFamiliesModule),
        resolve: { spotifyFamily: SpotifyFamilyResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpotifyLandingRoutingModule { }
