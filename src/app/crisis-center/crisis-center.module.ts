import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ],
  exports: [CrisisCenterComponent],
  declarations: [CrisisCenterComponent]
})
export class CrisisCenterModule { }
