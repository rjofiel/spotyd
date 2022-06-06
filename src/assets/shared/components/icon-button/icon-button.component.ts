import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent {
  @Input() label: string;
  @Input() iconName: string;
  @Output() clicked = new EventEmitter<any>();

  constructor() {
    console.log(this.iconName);
  }

  sendEmitter(ev: any): void {
    console.log(ev, typeof ev);
    this.clicked.emit();
  }

}
