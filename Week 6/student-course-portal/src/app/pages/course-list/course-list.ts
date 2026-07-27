import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';
import { Course } from '../../models/course.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadCourses } from '../../store/course/course.actions';
import {
  selectAllCourses,
  selectCoursesLoading
} from '../../store/course/course.selectors';


@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  constructor(
  private store: Store
) {}

  errorMessage = '';

 loading$!: Observable<boolean>;
courses$!: Observable<Course[]>;
  ngOnInit() {

  this.loading$ = this.store.select(selectCoursesLoading);

  this.courses$ = this.store.select(selectAllCourses);

  this.store.dispatch(loadCourses());

}

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

}