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

  finalAge="";
  finalData : any;
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
    .subscribe(data =>
    // convert Json object to String result
    this.formatResponse(data));
   
  }

  //sorry for this code :p
  public formatResponse(finalData){
    var result ="Your age is : ";
    var count = Object.keys(finalData).length;
    if(count<=1){
      result +=finalData[this.ageDateAs]
      +" "
      +this.ageDateAs.substring(0,1).toUpperCase()
      +this.ageDateAs.substring(1,this.ageDateAs.length);
    }else{
      var res=" ";
      for (let prop in finalData) {
        res+=finalData[prop]
        +" "
        +prop.substring(0,1).toUpperCase()
        +prop.substring(1,prop.length)+" And ";
      }
      // remove 'And ' from the End 
      res=res.substring(1,res.length-4)+".";
      result+=res;
    }
    this.finalAge=result;
  }
  ngOnInit() {
  }
  

}
