import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../components/autenticacion/autenticacion.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private router: Router){}

  canActivate(): boolean {

    if (localStorage.getItem('token').length>2) {
        return true;
        
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
    // return this.auth.comprobarEstarAutenticado();
  }

}
