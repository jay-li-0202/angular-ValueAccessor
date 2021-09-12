import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResettableInputComponent } from './resettable-input.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ResettableInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
