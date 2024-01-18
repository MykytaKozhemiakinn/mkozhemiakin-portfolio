import { createFeatureSelector, createSelector } from '@ngrx/store';
import { projectsFeatureKey, State } from './projects.reducer';

export const projectsState = createFeatureSelector<State>(projectsFeatureKey);

export const projectsSelector = createSelector(
  projectsState,
  (state: State) => state.projects
);
