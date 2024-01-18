import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, switchMap } from 'rxjs';
import { FirestoreService } from '@app/services/firestore.service';
import { ProjectsActions } from '@app/store/projects/index';
import { ProjectModel } from '@app/models/project.model';

Injectable();
export class ProjectsEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly firestoreService: FirestoreService =
    inject(FirestoreService);

  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.loadProjects),
      switchMap(() => {
        return from(this.firestoreService.loadProjects()).pipe(
          map((loadedProjects: ProjectModel[] | undefined) => {
            const projects: ProjectModel[] = loadedProjects!!.sort(
              (a: ProjectModel, b: ProjectModel) => a.id - b.id
            );
            return ProjectsActions.loadProjectsSuccess({ projects });
          })
        );
      })
    )
  );
}
