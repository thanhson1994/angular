import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import {ImportModule} from './import/import.module';
import { AppComponent } from './app.component';
import { ThanhsonComponent } from './thanhson/thanhson.component';
import { MinComponent } from './min/min.component';
import { HeroComponent } from './hero/hero.component';
import { SpecialComponent } from './special/special.component';
import { FormComponent } from './form/form.component';

import { CollapseGroupComponent } from './collapse-group/collapse-group.component';
import { CollapseComponent } from './collapse/collapse.component';
import { CardComponent } from './card/card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { LtComponent } from './lt/lt.component';
// import { ImportComponent } from './import/import.component';


@NgModule({
  declarations: [
    AppComponent,
    ThanhsonComponent,
    MinComponent,
    HeroComponent,
    SpecialComponent,
    FormComponent,


    CollapseGroupComponent,
    CollapseComponent,
    CardComponent,
    ContactFormComponent,
    ReactiveFormComponent,
    // LtComponent,
    // ImportComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ImportModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
