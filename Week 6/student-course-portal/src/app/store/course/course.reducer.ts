import {

createReducer,

on

} from '@ngrx/store';

import * as CourseActions from './course.actions';

import { Course } from '../../models/course.model';

export interface CourseState{

courses:Course[];

loading:boolean;

error:string|null;

}

export const initialState:CourseState={

courses:[],

loading:false,

error:null

};

export const courseReducer=

createReducer(

initialState,

on(CourseActions.loadCourses,

state=>({

...state,

loading:true

})),

on(CourseActions.loadCoursesSuccess,

(state,action)=>({

...state,

loading:false,

courses:action.courses

})),

on(CourseActions.loadCoursesFailure,

(state,action)=>({

...state,

loading:false,

error:action.error

}))

);