import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
  ValidationErrors,
  FormArray,
  FormControl
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})
export class ReactiveEnrollmentForm implements OnInit {

  enrollForm!: FormGroup;

  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],

      studentEmail: this.fb.control(
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck]
      ),

      courseId: [
        '',
        [Validators.required, this.noCourseCode]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])
    });
  }

  // Custom Validator
  noCourseCode(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (value && value.startsWith('XX')) {
      return { noCourseCode: true };
    }

    return null;
  }

  // Async Validator
  simulateEmailCheck(control: AbstractControl)
    : Promise<ValidationErrors | null> {

    return new Promise(resolve => {

      setTimeout(() => {

        if (control.value?.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }

      }, 800);

    });
  }

  // Typed getter
  get additionalCourses(): FormArray {

    return this.enrollForm.get(
      'additionalCourses'
    ) as FormArray;
  }

  addCourse() {

    this.additionalCourses.push(
      new FormControl('', Validators.required)
    );
  }

  removeCourse(index: number) {

    this.additionalCourses.removeAt(index);
  }

  onSubmit() {

  console.log(this.enrollForm.value);

  console.log(this.enrollForm.getRawValue());

  this.submitted = true;
}

    /*
      value -> excludes disabled controls

      getRawValue() -> includes disabled controls
    */
  }
