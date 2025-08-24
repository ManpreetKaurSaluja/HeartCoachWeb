import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const ok = !!localStorage.getItem('hc.access');
  if (!ok) { new Router().navigate(['/auth/register']); }
  return ok;
};
