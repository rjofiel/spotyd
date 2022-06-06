import { Directive, HostBinding, Input } from '@angular/core';
import { BtnSize } from './model';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[buttonPrimaryStyle]'
})

export class ButtonPrimaryStyleDirective {
  @Input() size: BtnSize ;
  @Input() isLoading: boolean;

  @HostBinding('class') get classes(): string {
    return `btn-primary size-${this.size} ${this.isLoading ? 'spinner' : ''}`;
  }
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[buttonSecondaryStyle]'
})

export class ButtonSecondaryStyleDirective {
  @Input() size: BtnSize ;
  @Input() isLoading: boolean;

  @HostBinding('class') get classes(): string {
    return `btn-secondary size-${this.size} ${this.isLoading ? 'spinner' : ''}`;
  }
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[buttonErrorStyle]'
})

export class ButtonErrorStyleDirective {
  @Input() size: BtnSize ;
  @Input() isLoading: boolean;

  @HostBinding('class') get classes(): string {
    return `btn-error size-${this.size} ${this.isLoading ? 'spinner' : ''}`;
  }
}

