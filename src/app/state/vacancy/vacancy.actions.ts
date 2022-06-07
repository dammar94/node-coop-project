import { Action, createAction, props } from '@ngrx/store';
import { Vacancy } from '../../models/vacancy';

export const ADD_VACANCY: string = '[Vacancy] Add Vacancy';
export const DELETE_VACANCY: string = '[Vacancy] Delete Vacancy';

export class AddVacancy implements Action {
  readonly type = ADD_VACANCY;
  constructor(public payload: Vacancy) {}
}

export class DeleteVacancy implements Action {
  readonly type = DELETE_VACANCY;
  constructor(public payload: Vacancy) {}
}

export type All = AddVacancy;
