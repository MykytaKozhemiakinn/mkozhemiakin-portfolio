import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SocialMediaComponent } from '@app/components/social-media/social-media.component';
import { LinkedTextComponent } from '@app/components/linked-text/linked-text.component';
import { Social } from '@app/models/social.model';
import { HomeLinks } from '@app/constants/home-links';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SocialMediaComponent, LinkedTextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public readonly homeLinks: Social[] = HomeLinks;
}
