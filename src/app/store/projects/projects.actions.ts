import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '@app/store/projects/action-types';
import { ProjectModel } from '@app/models/project.model';

export const loadProjects = createAction(ActionTypes.LOAD_PROJECTS);

export const loadProjectsSuccess = createAction(
  ActionTypes.LOAD_PROJECTS_SUCCESS,
  props<{ projects: ProjectModel[] | undefined }>()
);

export const loadProjectsError = createAction(
  ActionTypes.LOAD_PROJECTS_FAILURE,
  props<{ error: string }>()
);
