import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { MinComponent } from './min/min.component';

const ROUTES: Routes = [
  {
    path: '',
   component :  ReactiveFormComponent
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  }, {
     path: 'login',
     component: MinComponent
  },

  {
    path: '**',
    redirectTo: '/'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
