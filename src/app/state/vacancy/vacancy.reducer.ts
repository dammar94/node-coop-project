import { JobType } from 'src/app/job-type';
import { Vacancy } from '../../vacancy';
import * as VacancyActions from './vacancy.actions';

export type Action = VacancyActions.All;

export const defaultState: Vacancy[] = [
  {
    title: 'title1',
    type: JobType.PART_TIME,
    description: 'description1'
  },
  {
    title: 'title2',
    type: JobType.PART_TIME,
    description: 'description2'
  },
  {
    title: 'title3',
    type: JobType.FULL_TIME,
    description: 'description3'
  }
];

export function vacancyReducer(state: Vacancy[] = defaultState, action: Action) {
  console.log(action.type, state);
  switch (action.type) {
    case VacancyActions.ADD_VACANCY:
      return [...state, action.payload];
    default:
      return state;
  }
}
