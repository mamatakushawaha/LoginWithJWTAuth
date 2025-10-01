import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginModule } from './userlogin/userlogin.module';
import { RegisterModule } from './register/register.module';
import { ProfileModule } from './profile/profile.module';




@NgModule({
  declarations: [
    AppComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    UserloginModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
