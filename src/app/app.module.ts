import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';



import { AppComponent } from './app.component';
import { ThanhsonComponent } from './thanhson/thanhson.component';
import { MinComponent } from './min/min.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    ThanhsonComponent,
    MinComponent,
    HeroComponent
  ],
  imports: [

    BrowserModule,
    FormsModule,
    MatTabsModule,
   MatButtonModule,
   BrowserAnimationsModule,
   MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
