import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { SocialMediaComponent } from '@app/components/social-media/social-media.component';
import { Store } from '@ngrx/store';
import { socialsSelector } from '@app/store/socials/socials.selectors';
import { Subject, takeUntil } from 'rxjs';
import { SocialsActions } from '@app/store/socials';
import { Social } from '@app/models/social.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialMediaComponent, JsonPipe],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  private readonly store: Store = inject(Store);
  private readonly changeDetectorRef: ChangeDetectorRef =
    inject(ChangeDetectorRef);

  public socials: Social[] | undefined;
  private readonly destroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.store
      .select(socialsSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((socials: Social[] | undefined): void => {
        if (!socials?.length) {
          this.store.dispatch(SocialsActions.loadSocials());
        } else {
          this.socials = socials;
          this.changeDetectorRef.detectChanges();
        }
      });
  }
}
