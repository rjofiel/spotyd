import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CustomIconsService } from 'src/assets/shared/services/custom-icons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Spotyd';
}
