import { Injectable } from '@angular/core';
import { CourseService } from './course';
import { Course } from '../models/course.model';
import { Observable, forkJoin, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn:'root'
})

export class EnrollmentService{

constructor(
  private courseService: CourseService,
  private http: HttpClient
) {}

private enrolledCourseIds:number[]=[];

getStudentsByCourse(courseId: number): Observable<any[]> {

  return this.http.get<any[]>(

    `http://localhost:3000/students?courseId=${courseId}`

  );

}

enroll(id:number){

if(!this.enrolledCourseIds.includes(id))
this.enrolledCourseIds.push(id);

}

unenroll(id:number){

this.enrolledCourseIds=
this.enrolledCourseIds.filter(x=>x!==id);

}

isEnrolled(id:number){

return this.enrolledCourseIds.includes(id);

}

getEnrolledCourses(): Observable<Course[]> {

  if (this.enrolledCourseIds.length === 0) {
    return of([]);
  }

  return forkJoin(

    this.enrolledCourseIds.map(id =>
      this.courseService.getCourseById(id)
    )

  );

}

}