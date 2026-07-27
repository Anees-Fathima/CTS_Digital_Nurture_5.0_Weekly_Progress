import { createReducer, on } from '@ngrx/store';

import * as EnrollmentActions from './enrollment.actions';


export interface EnrollmentState {

  enrolledCourseIds:number[];

}


export const initialState:EnrollmentState = {

  enrolledCourseIds:[]

};


export const enrollmentReducer = createReducer(

initialState,


on(
EnrollmentActions.enrollInCourse,

(state,action)=>({

...state,

enrolledCourseIds:[
...state.enrolledCourseIds,
action.courseId
]

})

),


on(
EnrollmentActions.unenrollFromCourse,

(state,action)=>({

...state,

enrolledCourseIds:
state.enrolledCourseIds.filter(
id=>id!==action.courseId
)

})

),


on(
EnrollmentActions.setEnrolledCourses,

(state,action)=>({

...state,

enrolledCourseIds:action.courseIds

})

)

);