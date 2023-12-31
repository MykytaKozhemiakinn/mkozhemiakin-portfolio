import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { SocialsActions } from '@app/store/socials/index';
import { from, map, switchMap } from 'rxjs';
import { FirestoreService } from '@app/services/firestore.service';
import { Social } from '@app/models/social.model';

Injectable();
export class SocialsEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly firestoreService: FirestoreService =
    inject(FirestoreService);

  loadSocials$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SocialsActions.loadSocials),
      switchMap(() => {
        return from(this.firestoreService.loadSocials()).pipe(
          map((socials: Social[] | undefined) => {
            return SocialsActions.loadSocialsSuccess({ socials });
          })
        );
      })
    )
  );
}
