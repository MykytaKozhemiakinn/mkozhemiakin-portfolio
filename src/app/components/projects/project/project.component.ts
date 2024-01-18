import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProjectModel } from '@app/models/project.model';
import { TextBlockComponent } from '@app/components/projects/text-block/text-block.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TextBlockComponent, NgClass],
  templateUrl: './project.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  @Input() project!: ProjectModel;
  @Input() first!: boolean;
  @Input() last!: boolean;
}
