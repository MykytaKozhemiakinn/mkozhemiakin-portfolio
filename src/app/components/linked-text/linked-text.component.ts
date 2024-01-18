import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-linked-text',
  standalone: true,
  templateUrl: './linked-text.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedTextComponent {
  @Input() text: string | undefined;
  @Input() linkUrl: string | undefined;
}
