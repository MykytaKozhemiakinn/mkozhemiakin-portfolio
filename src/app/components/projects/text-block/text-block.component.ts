import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProjectLinkModel } from '@app/models/project.model';

@Component({
  selector: 'app-text-block',
  standalone: true,
  templateUrl: './text-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextBlockComponent {
  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() isLink: boolean | undefined;
  @Input() link!: ProjectLinkModel;
}
