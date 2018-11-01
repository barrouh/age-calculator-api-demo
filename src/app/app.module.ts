import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppFormComponent } from './app-form/app-form.component';

@NgModule({
  declarations: [
    AppFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppFormComponent]
})
export class AppModule { }
