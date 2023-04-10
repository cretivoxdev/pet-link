import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService){

  }

  canActivate(): boolean {
    const token = localStorage.getItem('access_token'); // or get the token from a cookie
    if (token !== null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
