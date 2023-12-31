import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '@app/store/socials/action-types';
import { Social } from '@app/models/social.model';

export const loadSocials = createAction(ActionTypes.LOAD_SOCIALS);

export const loadSocialsSuccess = createAction(
  ActionTypes.LOAD_SOCIALS_SUCCESS,
  props<{ socials: Social[] | undefined }>()
);

export const loadSocialsError = createAction(
  ActionTypes.LOAD_SOCIALS_FAILURE,
  props<{ error: string }>()
);
