import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TempleUIComponent } from './temple-ui/temple-ui.component';
import { TemplepopupdetailsComponent } from './templepopupdetails/templepopupdetails.component';



@NgModule({
  declarations: [
    AppComponent,
    TempleUIComponent,
    TemplepopupdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
