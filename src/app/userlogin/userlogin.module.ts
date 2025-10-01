import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';     
import {HttpClientModule} from '@angular/common/http';    
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
     RouterModule  ,
    HttpClientModule  
  ]
})
export class UserloginModule { }
