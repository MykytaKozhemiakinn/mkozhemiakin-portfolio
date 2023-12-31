import { createFeatureSelector, createSelector } from '@ngrx/store';
import { socialsFeatureKey, State } from './socials.reducer';

export const socialsState = createFeatureSelector<State>(socialsFeatureKey);

export const socialsSelector = createSelector(
  socialsState,
  (state: State) => state.socials
);
