import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { CreditLabelPipe } from '../../pipes/credit-label-pipe';
import { HighlightDirective } from '../../directives/highlight';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, CreditLabelPipe, HighlightDirective],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course: any;

  @Input()
  selectedCourseId: number | null = null;

  @Output()
  enrollRequested = new EventEmitter<number>();

  isExpanded = false;

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  get cardClasses() {
  return {
    'card--enrolled': this.course.id === this.selectedCourseId,
    'card--full': this.course.credits >= 4,
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




  ngOnChanges(changes: SimpleChanges) {
    console.log('Course changed:', changes);
  }
}