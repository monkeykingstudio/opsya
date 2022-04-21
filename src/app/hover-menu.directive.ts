import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHoverMenu]'
})
export class HoverMenuDirective {

  constructor(public elementRef:ElementRef) { }
  @Input('appHoverMenu') hoverClass:any;

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverClass);
  }

}
