import {
  Directive,
  ElementRef,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input()
  appHighlight = 'yellow';

  private originalColor = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.originalColor =
      getComputedStyle(this.el.nativeElement).backgroundColor;

    this.el.nativeElement.style.backgroundColor =
      this.appHighlight;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor =
      this.originalColor;
  }
}