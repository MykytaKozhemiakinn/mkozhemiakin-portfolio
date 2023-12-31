import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Social } from '@app/models/social.model';

@Component({
  selector: 'app-social-media',
  standalone: true,
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMediaComponent {
  @Input() social: Social | undefined;
}
