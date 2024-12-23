import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service.js';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router); 

  if (!tokenService.getToken()) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
