import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '@app/store/socials/action-types';
import { SocialModel } from '@app/models/social.model';

export const loadSocials = createAction(ActionTypes.LOAD_SOCIALS);

export const loadSocialsSuccess = createAction(
  ActionTypes.LOAD_SOCIALS_SUCCESS,
  props<{ socials: SocialModel[] | undefined }>()
);

export const loadSocialsError = createAction(
  ActionTypes.LOAD_SOCIALS_FAILURE,
  props<{ error: string }>()
);
