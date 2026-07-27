import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course';
import { Course } from '../../models/course.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-detail',
  imports: [],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.css',
})
export class CourseDetail {
  course!: Course | undefined;

constructor(
  private route: ActivatedRoute,
  private courseService: CourseService
){}

ngOnInit(){
const id =
Number(this.route.snapshot.paramMap.get('id'));

// switchMap is used to chain dependent HTTP requests.
// It cancels the previous inner Observable when a new value
// arrives, preventing outdated responses.
//
// In this project, a complete implementation would require:
// 1. A Student model
// 2. A students API endpoint
// 3. An EnrollmentService.getStudentsByCourse() method
// 4. Displaying enrolled students in the CourseDetail component

this.courseService.getCourseById(id).subscribe({

  next: (course) => {

    this.course = course;

  }

});
}
}
