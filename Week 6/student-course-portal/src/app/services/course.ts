import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { map, tap, retry, catchError } from 'rxjs/operators';

import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
  private http: HttpClient
) {}
private apiUrl = 'http://localhost:3000/courses';


getCourses(): Observable<Course[]> {

  return this.http.get<Course[]>(this.apiUrl).pipe(

    map(courses =>
      courses.filter(course => course.credits > 0)
    ),

    // tap is used for side effects like logging.
    // Unlike map(), it does not modify the emitted data.

    tap(courses =>
      console.log('Courses loaded:', courses.length)
    ),

    retry(2),

    catchError(err => {

      console.error(err);

      return throwError(() =>
        new Error('Failed to load courses. Please try again.')
      );

    })

  );

}

  getCourseById(id:number): Observable<Course> {

  return this.http.get<Course>(
    `http://localhost:3000/courses/${id}`
  );

}

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {

  return this.http.post<Course>(
    'http://localhost:3000/courses',
    course
  );

}

updateCourse(course: Course): Observable<Course> {

  return this.http.put<Course>(
    `http://localhost:3000/courses/${course.id}`,
    course
  );

}

deleteCourse(id: number) {

  return this.http.delete(
    `http://localhost:3000/courses/${id}`
  );

}

}