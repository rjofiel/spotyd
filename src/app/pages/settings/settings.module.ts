import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DirectivesModule } from 'src/assets/directives/directives.module';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

const material = [
  ReactiveFormsModule,
  FormsModule,
  MatInputModule
];

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    DirectivesModule,
    ...material
  ]
})
export class SettingsModule { }
