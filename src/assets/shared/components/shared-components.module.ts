import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { MatIconModule } from '@angular/material/icon'
@NgModule({
  declarations: [IconButtonComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [IconButtonComponent]
})
export class SharedComponentsModule { }
