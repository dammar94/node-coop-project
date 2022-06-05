import { ActionReducerMap } from "@ngrx/store";
import { Vacancy } from "../vacancy";
import { vacancyReducer } from "./vacancy/vacancy.reducer";

export interface AppState {
  vacancies: Vacancy[];
};

export const reducers: ActionReducerMap<AppState, any> = {
  vacancies: vacancyReducer
};
