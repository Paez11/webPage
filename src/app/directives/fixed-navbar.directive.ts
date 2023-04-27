import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFixedNavbar]'
})
export class FixedNavbarDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.pageYOffset > 0) {
      this.renderer.addClass(this.elementRef.nativeElement, 'fixed');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'fixed');
    }
  }
}
