import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.store';
import { Vacancy } from '../vacancy';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  vacancies$ : Observable<Vacancy[]>;

  constructor(private store: Store<AppState>) {
    this.vacancies$ = this.store.select('vacancies');
  }

  ngOnInit(): void {
  }

}
