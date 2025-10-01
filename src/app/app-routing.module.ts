import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './userlogin/login-page/login-page.component';
import { UserRegisterComponent } from './register/user-register/user-register.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';

const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginPageComponent },
  {path:'register',component: UserRegisterComponent},
  { path: 'profile', component: ProfilePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
