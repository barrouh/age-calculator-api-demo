import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppFormComponent } from './app-form/app-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    AppFormComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppFormComponent]
})
export class AppModule { }
