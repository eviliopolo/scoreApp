import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanLoad {

  constructor( private usuarioService: AuthenticationService ) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean  {

    return this.usuarioService.validaToken();
  }

  // canActivate(): Observable<boolean> | Promise<boolean> | boolean {
  //   return false;
  // }

}
