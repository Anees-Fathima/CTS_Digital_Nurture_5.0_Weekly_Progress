import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';
import { CourseSummaryWidget } from '../../components/course-summary-widget/course-summary-widget';
import { Notification } from '../../components/notification/notification';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CourseSummaryWidget, Notification],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  portalName = 'Student Course Portal';

  isPortalActive = true;

  message = '';

  searchTerm = '';

  availableCourses=0;

constructor(
  private courseService:CourseService,
  private router: Router,
  private route: ActivatedRoute
){}

  searchCourses() {
  this.router.navigate(
    [],
    {
      relativeTo: this.route,
      queryParams: {
        search: this.searchTerm
      },
      queryParamsHandling: 'merge'
    }
  );
}

goToSearch() {
  this.router.navigate(
    ['courses'],
    {
      queryParams: {
        search: this.searchTerm
      }
    }
  );
}

  onEnrollClick() {
    this.message = 'Enrollment opened!';
  }

  ngOnInit() {
    this.courseService.getCourses().subscribe({

  next: (courses) => {

    this.availableCourses = courses.length;

  }

});
    this.searchTerm =this.route.snapshot.queryParamMap.get('search') ?? ''
    console.log('HomeComponent initialised — courses loaded');
  }

  ngOnDestroy() {
    console.log('HomeComponent destroyed');
  }
}