import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SlicePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import {SafePipe} from  './safepipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SafePipe ],
  bootstrap:    [ AppComponent ],
  providers : [SlicePipe]
})
export class AppModule { }
