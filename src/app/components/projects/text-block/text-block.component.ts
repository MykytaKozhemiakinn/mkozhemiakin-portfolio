import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProjectLinkModel } from '@app/models/project.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-text-block',
  standalone: true,
  templateUrl: './text-block.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class TextBlockComponent {
  @Input() title: string | undefined;
  @Input() description: string | number | undefined;
  @Input() isLink: boolean | undefined;
  @Input() link!: ProjectLinkModel;
  @Input() noMarginTop: boolean | undefined;
}
