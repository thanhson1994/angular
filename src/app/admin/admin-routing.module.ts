import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent } from './admin.component' ;
import {AdminInfoComponent } from './admin-info/admin-info.component' ;
import {AdminCenterComponent} from './admin-center.component';


const ROUTES: Routes = [{
  path: '',
  component: AdminComponent,
  children: [ {
    path: 'admin-info',
    component: AdminInfoComponent,
    // pathMatch: 'full'
  }, {
    path: '',
    component: AdminCenterComponent
  }
]

}];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
