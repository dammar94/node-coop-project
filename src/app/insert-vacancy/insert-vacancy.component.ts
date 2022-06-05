import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.store';
import * as VacancyActions from 'src\\app\\state\\vacancy\\vacancy.actions';
import { JobType } from '../job-type';

@Component({
  selector: 'app-insert-vacancy',
  templateUrl: './insert-vacancy.component.html',
  styleUrls: ['./insert-vacancy.component.scss']
})
export class InsertVacancyComponent implements OnInit {

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  vacancyForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(64)]],
    description: ['', [Validators.required, Validators.maxLength(256)]],
    type: ['', Validators.required]
  });

  ngOnInit(): void { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.vacancyForm.value);
    this.store.dispatch(new VacancyActions.AddVacancy({ title: 'test', description: 'test', type: JobType.FULL_TIME }));
  }

}
