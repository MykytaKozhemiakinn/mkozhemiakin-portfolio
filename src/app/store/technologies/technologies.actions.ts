import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '@app/store/technologies/action-types';
import { TechnologiesModel } from '@app/models/technology.model';

export const loadTechnologies = createAction(ActionTypes.LOAD_TECHNOLOGIES);

export const loadTechnologiesSuccess = createAction(
  ActionTypes.LOAD_TECHNOLOGIES_SUCCESS,
  props<{ technologies: TechnologiesModel | undefined }>()
);

export const loadTechnologiesError = createAction(
  ActionTypes.LOAD_TECHNOLOGIES_FAILURE,
  props<{ error: string }>()
);
