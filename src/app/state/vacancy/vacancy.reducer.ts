import { JOB_TYPE } from 'src/app/constants/job-type';
import { Vacancy } from '../../models/vacancy';
import * as VacancyActions from './vacancy.actions';

export type Action = VacancyActions.All;

export const defaultState: Vacancy[] = [
  {
    title: 'title1',
    type: JOB_TYPE.PART_TIME,
    description: 'description1',
    id: 0
  },
  {
    title: 'title2',
    type: JOB_TYPE.PART_TIME,
    description: 'description2',
    id: 1
  },
  {
    title: 'title3',
    type: JOB_TYPE.FULL_TIME,
    description: 'description3',
    id: 2
  }
];

var idCount : number = 3;

export function vacancyReducer(state: Vacancy[] = defaultState, action: Action) {
  console.log(action.type, state);
  switch (action.type) {
    case VacancyActions.ADD_VACANCY:
    let vacancyToAdd: Vacancy = {
      title: action.payload.title,
      type: action.payload.type,
      description: action.payload.description,
      id: idCount
    };
    idCount++;
    return [...state, vacancyToAdd];
    case VacancyActions.DELETE_VACANCY:
      let vacancyToDelete: Vacancy = action.payload;
      return state.filter( vacancy => vacancy.id != vacancyToDelete.id);
    default:
      return state;
  }
}
