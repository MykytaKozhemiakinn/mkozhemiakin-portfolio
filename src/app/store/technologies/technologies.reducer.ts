import { createReducer, on } from '@ngrx/store';
import { TechnologiesModel } from '@app/models/technology.model';
import { TechnologiesActions } from '@app/store/technologies/index';

export const technologiesFeatureKey: string = 'technologies';

export interface State {
  technologies: TechnologiesModel | undefined;
}

const initialState: State = {
  technologies: undefined,
};

export const technologiesReducer = createReducer(
  initialState,
  on(
    TechnologiesActions.loadTechnologiesSuccess,
    (state: State, { technologies }) => {
      return { ...state, technologies };
    }
  )
);
