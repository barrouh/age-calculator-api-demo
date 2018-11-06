import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { GetAgeService } from '../get-age.service';

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

  finalAge ="";
  birthdate="";
  ageAtTheDateOf="";
  ageDateAs="";
  
  constructor(private getAgeService : GetAgeService) { }

  onSubmit() {
    // get the inputs values when submiting the form 
    this.birthdate=this.ageCalculatorForm.value.birthdate;
    this.ageAtTheDateOf=this.ageCalculatorForm.value.ageAtTheDateOf;
    this.ageDateAs=this.ageCalculatorForm.value.ageDateAs;
    // call age service to get the finall age
    this.getAgeService.getFinalAge(this.birthdate,this.ageAtTheDateOf,this.ageDateAs)
    .subscribe(data =>this.finalAge=data[this.ageDateAs]
    +" "
    +this.ageDateAs.substring(0,1).toUpperCase()
    +this.ageDateAs.substring(1,this.ageDateAs.length));
  }
  ngOnInit() {
  }

}
