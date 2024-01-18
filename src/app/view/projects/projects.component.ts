import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProjectModel } from '@app/models/project.model';
import { projectsSelector } from '@app/store/projects/projects.selectors';
import { ProjectsActions } from '@app/store/projects';
import { JsonPipe } from '@angular/common';
import { ProjectComponent } from '@app/components/projects/project/project.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [JsonPipe, ProjectComponent],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private readonly store: Store = inject(Store);
  private readonly changeDetectorRef: ChangeDetectorRef =
    inject(ChangeDetectorRef);

  public projects: ProjectModel[] | undefined;
  private readonly destroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
    this.store
      .select(projectsSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((projects: ProjectModel[] | undefined): void => {
        if (!projects?.length) {
          this.store.dispatch(ProjectsActions.loadProjects());
        } else {
          this.projects = projects;
          this.changeDetectorRef.detectChanges();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
