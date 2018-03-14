import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import {ImportModule} from './import/import.module';
import { AppComponent } from './app.component';
import { ThanhsonComponent } from './thanhson/thanhson.component';
import { MinComponent } from './min/min.component';
import { HeroComponent } from './hero/hero.component';
// import { LtComponent } from './lt/lt.component';
// import { ImportComponent } from './import/import.component';


@NgModule({
  declarations: [
    AppComponent,
    ThanhsonComponent,
    MinComponent,
    HeroComponent,
    // LtComponent,
    // ImportComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ImportModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
