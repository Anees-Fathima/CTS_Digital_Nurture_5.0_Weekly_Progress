import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';


import {
  selectEnrolledIds
}
from '../../store/enrollment/enrollment.selectors';


import {
  enrollInCourse,
  unenrollFromCourse
}
from '../../store/enrollment/enrollment.actions';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
  
})
export class CourseCard implements OnChanges, OnInit {

  constructor(
  public enrollmentService: EnrollmentService,
  private router: Router,
  private store: Store
) {}

  @Input() course: any;

  isExpanded = false;

  enrolledIds$!: Observable<number[]>;


  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

 toggleEnrollment(
  id:number,
  enrolled:boolean
){

  if(enrolled){

    this.store.dispatch(
      unenrollFromCourse({
        courseId:id
      })
    );

  }

  else{

    this.store.dispatch(
      enrollInCourse({
        courseId:id
      })
    );

  }

}
goToCourse() {
  this.router.navigate(['/courses', this.course.id]);
}


  get cardClasses() {
  return {
    'expanded': this.isExpanded
  };
}

  get borderColor() {

    switch (this.course?.gradeStatus) {

      case 'passed':
        return 'green';

      case 'failed':
        return 'red';

      default:
        return 'gray';
    }
  }
ngOnInit(){

  this.enrolledIds$ =
  this.store.select(selectEnrolledIds);

}


  ngOnChanges(changes: SimpleChanges) {
    console.log('Course changed:', changes);
  }
}