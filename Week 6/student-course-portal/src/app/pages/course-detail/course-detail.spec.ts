import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDetail } from './course-detail';
import { provideRouter } from '@angular/router';
import { CourseService } from '../../services/course';
import { of } from 'rxjs';

describe('CourseDetail', () => {
  let component: CourseDetail;
  let fixture: ComponentFixture<CourseDetail>;

  const mockCourseService = {
    getCourseById: () =>
      of({
        id: 1,
        title: 'Angular',
        description: 'Angular Course',
        duration: 40,
        credits: 4
      })
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetail],
      providers: [
        provideRouter([]),
        {
          provide: CourseService,
          useValue: mockCourseService
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetail);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});