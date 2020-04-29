import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomattributedirective]'
})
export class CustomattributedirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2)
  {
    this.ChangeBgColor('green');
  }
  ChangeBgColor(color: string) {
      this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
  @HostListener('mouseover') onMouseOver() {
    this.ChangeBgColor('green');
  }
  @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('black');
  }


}
