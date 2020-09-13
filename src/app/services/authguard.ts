
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router, UrlTree
} from '@angular/router';
import { Authservice } from './authservice';
import { Observable } from 'rxjs';

@Injectable()
export class Authguard implements CanActivate{

    constructor(
        private authService: Authservice,
        private router: Router
      ) {}
      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
        if (!this.authService.isAuthenticated()){
          this.router.navigate(['/login']);
          return false;
        }
    
        return true;
    
      }

}
