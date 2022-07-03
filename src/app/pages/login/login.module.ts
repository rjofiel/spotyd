import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { DirectivesModule } from 'src/assets/directives/directives.module';
import { MatIconModule } from '@angular/material/icon';
import { CustomIconsService } from 'src/assets/shared/services/custom-icons.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const material = [
  MatIconModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule,
    LoginRoutingModule,
    ...material
  ],
  providers: [CustomIconsService]
})
export class LoginModule { }
