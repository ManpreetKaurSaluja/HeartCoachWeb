import { HttpErrorResponse } from '@angular/common/http';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastService } from '../../shared/toast/toast.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);
  return next(req).pipe({
    error: (err: HttpErrorResponse) => {
      toast.show(err.error?.message || 'Something went wrong');
      throw err;
    }
  } as any);
};
