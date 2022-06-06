import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { UtilsService } from 'src/assets/shared/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {


  constructor(
    private _fb: FormBuilder,
    private _utilsSvc: UtilsService
  ) {
  }


}
