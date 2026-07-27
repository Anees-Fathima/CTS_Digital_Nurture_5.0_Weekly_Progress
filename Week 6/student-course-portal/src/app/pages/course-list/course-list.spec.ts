import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CourseList } from './course-list';

describe('CourseList', () => {
  let component: CourseList;
  let fixture: ComponentFixture<CourseList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

imports:[
 CourseList
],

providers:[
 provideMockStore({
   initialState:{
     course:{
       courses:[],
       loading:false,
       error:null
     }
   }
 })
]

}).compileComponents();

    fixture = TestBed.createComponent(CourseList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
