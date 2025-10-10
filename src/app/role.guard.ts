import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router:Router){}  
  canActivate():boolean{
    const role=localStorage.getItem('role');
    if(role?.toUpperCase()==='ADMIN'){
      return true;
    }else{
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
    
  
}
