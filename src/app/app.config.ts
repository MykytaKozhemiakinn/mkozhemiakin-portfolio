import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '@env/environment';
import { provideStore } from '@ngrx/store';
import { socialsReducer } from '@app/store/socials';
import { provideEffects } from '@ngrx/effects';
import { SocialsEffects } from '@app/store/socials/socials.effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { projectsReducer } from '@app/store/projects';
import { ProjectsEffects } from '@app/store/projects/projects.effects';
import { TechnologiesEffects } from '@app/store/technologies/technologies.effects';
import { technologiesReducer } from '@app/store/technologies';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(environment.firebase)),
      provideFirestore(() => getFirestore()),
    ]),
    provideStore({
      socials: socialsReducer,
      projects: projectsReducer,
      technologies: technologiesReducer,
    }),
    provideStoreDevtools(),
    provideEffects(...[SocialsEffects, ProjectsEffects, TechnologiesEffects]),
  ],
};
