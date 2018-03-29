import { NgModule } from '@angular/core';
import {HeroesComponent } from './heroes.component';
import { RouterModule, Routes } from '@angular/router';

 const ROUTES: Routes = [
   {
     path: 'heroes',
     component: HeroesComponent
     }

 ];

@NgModule({
  imports: [

 RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
