import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
  //Con guardianes como funciones en lugar de como clases


export class PermissionsService {
  constructor(private cookieService: CookieService, public router: Router) {}

canActivate(): boolean {
  const role: string = this.cookieService.get('role')
    if (role === 'admin') {
      console.log('tienes permiso');
      return true
    } else {
      console.log('NO TIENES PERMISO')
      this.router.navigate(['/auth/login']);
      return false
    }
  }
}

export const roleGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).canActivate();
};
