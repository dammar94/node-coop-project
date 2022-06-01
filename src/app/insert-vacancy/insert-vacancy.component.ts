import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-vacancy',
  templateUrl: './insert-vacancy.component.html',
  styleUrls: ['./insert-vacancy.component.scss']
})
export class InsertVacancyComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  vacancyForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(64)]],
    description: ['', [Validators.required, Validators.maxLength(256)]],
    type: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.vacancyForm.value);
  }

}
