import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.store';
import * as VacancyActions from '../state/vacancy/vacancy.actions';
import { JOB_TYPE } from '../constants/job-type';

@Component({
  selector: 'app-insert-vacancy',
  templateUrl: './insert-vacancy.component.html',
  styleUrls: ['./insert-vacancy.component.scss']
})
export class InsertVacancyComponent implements OnInit {
  public JOB_TYPE = JOB_TYPE;

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  vacancyForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(64)]],
    description: ['', [Validators.required, Validators.maxLength(256)]],
    type: ['', Validators.required]
  });

  ngOnInit(): void { }

  onSubmit() {
    const formValue = this.vacancyForm.value;
    this.store.dispatch(new VacancyActions.AddVacancy({ 
      title: formValue.title, 
      description: formValue.description, 
      type: formValue.type
    }));
  }

}
