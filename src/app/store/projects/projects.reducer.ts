import { createReducer, on } from '@ngrx/store';
import { ProjectModel } from '@app/models/project.model';
import { ProjectsActions } from '@app/store/projects/index';

export const projectsFeatureKey: string = 'projects';

export interface State {
  projects: ProjectModel[] | undefined;
}

const initialState: State = {
  projects: [],
};

export const projectsReducer = createReducer(
  initialState,
  on(ProjectsActions.loadProjectsSuccess, (state: State, { projects }) => {
    return { ...state, projects };
  })
);
