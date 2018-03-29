import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminInfoComponent } from './admin-info/admin-info.component';
import { AdminRoutingModule } from './admin-routing.module' ;
import { AdminCenterComponent } from './admin-center.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AdminInfoComponent, AdminCenterComponent]
})
export class AdminModule { }
