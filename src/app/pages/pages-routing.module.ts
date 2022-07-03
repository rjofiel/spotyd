import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlRoutes } from 'src/assets/url-routes.routes';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: UrlRoutes.login,
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: UrlRoutes.home,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        // canActivate: [UserLoggedGuard]
      },
      {
        path: UrlRoutes.spotify,
        loadChildren: () => import('./spotify-landing/spotify-landing.module').then(m => m.SpotifyLandingModule)
      },
      {
        path: UrlRoutes.settings,
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: '',
        pathMatch: '',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
