import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginModule } from './userlogin/userlogin.module';
import { RegisterModule } from './register/register.module';
import { ProfileModule } from './profile/profile.module';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';




@NgModule({
  declarations: [
    AppComponent,
    UnauthorizedComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    UserloginModule,
    RegisterModule,
   DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
