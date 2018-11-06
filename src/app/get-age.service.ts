import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GetAgeService {

  constructor(private http : HttpClient, private datePipe : DatePipe) { }
  
  
  public getFinalAge(birthdate,ageAtTheDateOf,ageDateAs){
    var apiHostUrl="http://localhost:8080/getAge?";
    //build final url with parameters :
    if(birthdate!=""){
      apiHostUrl=apiHostUrl+"birthdate="+this.formatDate(birthdate);
    }
    if(ageAtTheDateOf!=""){
      apiHostUrl=apiHostUrl+"&ageAtTheDateOf="+this.formatDate(ageAtTheDateOf);
    }
    if(ageDateAs!=""){
      apiHostUrl=apiHostUrl+"&ageAs="+ageDateAs;
    }
   console.log(apiHostUrl);
   return this.http.get(apiHostUrl);
}

private formatDate(date) : String{
  return  this.datePipe.transform(date, 'dd-MM-yyyy').toString();
}

}
