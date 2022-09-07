import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  tokenValidateData: any;
  roleRoutesList: any;

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('jwt')) {
      this.tokenValidateData = jwt_decode(localStorage.getItem('jwt'));

      if (this.tokenValidateData["role"] == 'admin') {
        return true;
      } else {
        if (state.url == '/dashboard') {
          return true;
        }

        this.roleRoutesList = JSON.parse(localStorage.getItem('nonAccessibleRoutes'));

        for (let i = 0; i < this.roleRoutesList.length; i++) {
          if (state.url == this.roleRoutesList[i]) {
            alert('Sorry, you dont have access to this URL.');
            return false;
          }
        }
        return true;
      }
    }
    localStorage.clear();
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
    return false;
  }
}