import { ActionReducerMap } from "@ngrx/store";
import { Vacancy } from "../models/vacancy";
import { vacancyReducer } from "./vacancy/vacancy.reducer";

export interface AppState {
  vacancies: Vacancy[];
};

export const reducers: ActionReducerMap<AppState, any> = {
  vacancies: vacancyReducer
};
