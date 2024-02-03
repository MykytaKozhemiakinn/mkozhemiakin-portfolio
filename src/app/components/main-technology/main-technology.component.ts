import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MainTechnologyModel } from '@app/models/technology.model';

@Component({
  selector: 'app-main-technology',
  standalone: true,
  templateUrl: './main-technology.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainTechnologyComponent {
  @Input() technology: MainTechnologyModel | undefined;
}
