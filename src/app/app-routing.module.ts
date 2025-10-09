import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './userlogin/login-page/login-page.component';
import { UserRegisterComponent } from './register/user-register/user-register.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { PaidCourseComponent } from './courses/paid-course/paid-course.component';
import { AuthGuard } from './auth.guard';
import { DashboardDataComponent } from './dashboard/dashboard-data/dashboard-data.component';
import { RestrictionGuard } from './restriction.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  { path: 'login', component: LoginPageComponent },
  {path:'register',component: UserRegisterComponent},
  { path: 'profile', component: ProfilePageComponent },
  { path: 'course', component:PaidCourseComponent, canActivate:[AuthGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: 'dashboard', component: DashboardDataComponent, canActivate: [AuthGuard, RestrictionGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
