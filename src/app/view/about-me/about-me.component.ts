import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TextBlockComponent } from '@app/components/projects/text-block/text-block.component';
import { calculateAge } from '@app/utils/calculate-age';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import {
  MainTechnologyModel,
  TechnologiesModel,
} from '@app/models/technology.model';
import { MainTechnologyComponent } from '@app/components/main-technology/main-technology.component';
import { technologiesSelector } from '@app/store/technologies/technologies.selectors';
import { TechnologiesActions } from '@app/store/technologies';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TextBlockComponent, MainTechnologyComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent implements OnInit, OnDestroy {
  private readonly store: Store = inject(Store);
  private readonly changeDetectorRef: ChangeDetectorRef =
    inject(ChangeDetectorRef);

  public age!: number;
  public mainTechnologies: MainTechnologyModel[] | undefined;
  public otherTechnologies: string | undefined;
  private readonly destroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.age = calculateAge();
    this.store
      .select(technologiesSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((technologies: TechnologiesModel | undefined): void => {
        if (
          !technologies?.mainTechnologies ||
          !technologies?.otherTechnologies
        ) {
          this.store.dispatch(TechnologiesActions.loadTechnologies());
        } else {
          this.mainTechnologies = technologies?.mainTechnologies;
          this.otherTechnologies = technologies?.otherTechnologies?.join(', ');
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
