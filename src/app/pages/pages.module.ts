import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserAvatarModule } from 'src/assets/shared/components/user-avatar/user-avatar.module';
import { CustomIconsService } from 'src/assets/shared/services/custom-icons.service';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

const material = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    UserAvatarModule,
    ...material
  ],
  providers: [CustomIconsService],
  exports: [PagesComponent]
})
export class PagesModule { }
