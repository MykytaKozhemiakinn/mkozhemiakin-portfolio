import { SocialModel } from '@app/models/social.model';
import { createReducer, on } from '@ngrx/store';
import { SocialsActions } from '@app/store/socials/index';

export const socialsFeatureKey: string = 'socials';

export interface State {
  socials: SocialModel[] | undefined;
}

const initialState: State = {
  socials: [],
};

export const socialsReducer = createReducer(
  initialState,
  on(SocialsActions.loadSocialsSuccess, (state: State, { socials }) => {
    return { ...state, socials };
  })
);
