import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestrictionGuard implements CanActivate {
  constructor(private authService: AuthService,private router:Router) { }
  canActivate():boolean{
    const username=this.authService.getUsername();
    if (username && username.toLowerCase().startsWith('a')) {
      return true;
    }else{
      this.router.navigate(['/unauthorized']);
    return false;
    }

    // alert('Access Denied! Only users whose name starts with "A" can access this page.');
    
  }
  
}
