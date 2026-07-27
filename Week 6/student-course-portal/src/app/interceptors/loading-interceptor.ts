import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {

  const loading = inject(LoadingService);

  setTimeout(() => {
    loading.isLoading$.next(true);
  });

  return next(req).pipe(

    finalize(() => {

      setTimeout(() => {
        loading.isLoading$.next(false);
      });

    })

  );

};