import { createFeatureSelector, createSelector } from '@ngrx/store';
import { technologiesFeatureKey, State } from './technologies.reducer';

export const technologiesState = createFeatureSelector<State>(
  technologiesFeatureKey
);

export const technologiesSelector = createSelector(
  technologiesState,
  (state: State) => state.technologies
);
