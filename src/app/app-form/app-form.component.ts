import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  ageCalculatorForm = new FormGroup({
    birthdate: new FormControl(''),
    ageAtTheDateOf: new FormControl(''),
    ageDateAs:new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.ageCalculatorForm.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
