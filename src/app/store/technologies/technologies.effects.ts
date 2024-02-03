import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, switchMap } from 'rxjs';
import { FirestoreService } from '@app/services/firestore.service';
import { TechnologiesModel } from '@app/models/technology.model';
import { TechnologiesActions } from '@app/store/technologies/index';

Injectable();
export class TechnologiesEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly firestoreService: FirestoreService =
    inject(FirestoreService);

  loadTechnologies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TechnologiesActions.loadTechnologies),
      switchMap(() => {
        return from(this.firestoreService.loadTechnologies()).pipe(
          map((loadedTechnologies: TechnologiesModel[] | undefined) => {
            const technologies: TechnologiesModel = loadedTechnologies![0];
            return TechnologiesActions.loadTechnologiesSuccess({
              technologies,
            });
          })
        );
      })
    )
  );
}
