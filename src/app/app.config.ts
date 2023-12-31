import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '@env/environment';
import { provideState, provideStore } from '@ngrx/store';
import { socialsReducer } from '@app/store/socials';
import { socialsFeatureKey } from '@app/store/socials/socials.reducer';
import { provideEffects } from '@ngrx/effects';
import { SocialsEffects } from '@app/store/socials/socials.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
    ]),
    provideStore(),
    provideState(...[{ name: socialsFeatureKey, reducer: socialsReducer }]),
    provideStoreDevtools(),
    provideEffects(...[SocialsEffects]),
  ],
};
