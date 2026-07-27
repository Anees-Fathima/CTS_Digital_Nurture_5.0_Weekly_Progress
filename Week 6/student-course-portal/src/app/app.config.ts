import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler-interceptor';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideState } from '@ngrx/store';
import { courseReducer } from './store/course/course.reducer';
import { provideEffects } from '@ngrx/effects';
import { CourseEffects } from './store/course/course.effects';

import { routes } from './app.routes';
import { loadingInterceptor } from './interceptors/loading-interceptor';
import { enrollmentReducer } 
from './store/enrollment/enrollment.reducer';

export const appConfig: ApplicationConfig = {
  providers: [

  provideBrowserGlobalErrorListeners(),

  provideRouter(routes),

  provideEffects([CourseEffects]),

  provideHttpClient(
    withInterceptors([
      authInterceptor,
      errorHandlerInterceptor,
      loadingInterceptor
    ])
  ),

  provideStore(),

  provideStoreDevtools({
    maxAge:25
  }),

  provideState(
    'course',
    courseReducer
  ),

  provideState(
    'enrollment',
    enrollmentReducer
  )

]
};
