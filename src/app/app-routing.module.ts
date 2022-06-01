import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertVacancyComponent } from './insert-vacancy/insert-vacancy.component';
import { VacanciesComponent } from './vacancies/vacancies.component';

const routes: Routes = [
  { path: '', redirectTo: 'vacancies', pathMatch: 'full' },
  { path: 'insert-vacancy', component: InsertVacancyComponent },
  { path: 'vacancies', component: VacanciesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
