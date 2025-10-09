import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import {HttpClientModule} from '@angular/common/http';
import{RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    DashboardDataComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ]
})
export class DashboardModule { }
