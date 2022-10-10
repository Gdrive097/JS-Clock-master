import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutologinGuard implements CanActivate {
  constructor(private _auth: AuthService, private router: Router) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._auth.loggedIn()) {
      this.router.navigate(['/dashboard/default']);
    } else {
      return true;
    }
  }
  
}
