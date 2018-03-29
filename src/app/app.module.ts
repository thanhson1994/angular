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

import { FormComponent } from './form/form.component';

import { CollapseGroupComponent } from './collapse-group/collapse-group.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { ResisterFormComponent } from './resister-form/resister-form.component';
import { OustandingComponent } from './oustanding/oustanding.component';
import { AppRoutingModule } from './app-routing.module';
// import { AdminComponent } from './admin/admin.component';
import { ProductModule } from './product/product.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
// import { AdminInfoComponent } from './admin-info/admin-info.component';




@NgModule({
  declarations: [
    AppComponent,
    ThanhsonComponent,
    MinComponent,
    FormComponent,
    CollapseGroupComponent,
    CollapseComponent,
    ContactFormComponent,
    ReactiveFormComponent,
    DialogComponent,
    ResisterFormComponent,
    OustandingComponent,
    // AdminComponent,
    // AdminInfoComponent

    // LtComponent,
    // ImportComponent
  ],
  entryComponents: [ ReactiveFormComponent ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ImportModule,
    ProductModule,
    CrisisCenterModule,
    HeroesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
