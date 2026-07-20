import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCard } from '../../components/course-card/course-card';
import { HighlightDirective } from '../../directives/highlight';
@Component({
  selector: 'app-course-list',
  imports: [CommonModule, CourseCard, HighlightDirective],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList implements OnInit {

  constructor(private cdr: ChangeDetectorRef) {}

  isLoading = true;

  selectedCourseId: number | null = null;

  courses = [
    { id: 1, name: 'Angular', code: 'ANG101', credits: 4, gradeStatus: 'passed' },
    { id: 2, name: 'Java', code: 'JAVA101', credits: 3, gradeStatus: 'failed' },
    { id: 3, name: 'Spring Boot', code: 'SPR101', credits: 4, gradeStatus: 'pending' },
    { id: 4, name: 'MySQL', code: 'DB101', credits: 3, gradeStatus: 'passed' },
    { id: 5, name: 'Python', code: 'PY101', credits: 4, gradeStatus: 'pending' }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.cdr.detectChanges();
    }, 1500);
  }

  trackByCourseId(index: number, course: any) {
    return course.id;
  }

  onEnroll(courseId: number) {
    console.log('Enrolling in course: ' + courseId);
    this.selectedCourseId = courseId;
  }
}