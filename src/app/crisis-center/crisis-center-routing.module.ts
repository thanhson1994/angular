import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CrisisCenterComponent  } from './crisis-center.component' ;
const ROUTES: Routes = [

  {
    path: 'crisis-center',
    component: CrisisCenterComponent
  }
];



@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
