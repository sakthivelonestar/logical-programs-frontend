import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMaximize]',
  exportAs: 'maximize',
  standalone: true 
})
export class MaximizeDirective {
  private isFullscreen = false;

  constructor(private el: ElementRef) {}

  toggle() {
    if (!this.isFullscreen) {
      this.el.nativeElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    this.isFullscreen = !this.isFullscreen;
  }

  checkfullscreen(): string {
    return this.isFullscreen ? 'show' : 'hide';
  }
}
