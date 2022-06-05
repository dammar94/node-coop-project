import { Action, createAction, props } from '@ngrx/store';
import { Vacancy } from '../../vacancy';

export const ADD_VACANCY = '[Vacancy] Add Vacancy';

export class AddVacancy implements Action {
  readonly type = ADD_VACANCY;
  constructor(public payload: Vacancy) {}
}

export type All = AddVacancy;
