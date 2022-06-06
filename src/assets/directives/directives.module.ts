import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonErrorStyleDirective, ButtonPrimaryStyleDirective, ButtonSecondaryStyleDirective } from './button-style.directive';

const buttons = [
  ButtonPrimaryStyleDirective,
  ButtonSecondaryStyleDirective,
  ButtonErrorStyleDirective
]

@NgModule({
  declarations: [
    ...buttons,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...buttons,
  ]
})
export class DirectivesModule { }
