import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustomattributedirective]'
})
export class CustomattributedirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2)
  {
    this.ChangeBgColor('green');
  }

  @HostBinding('style.border') border : string;

  ChangeBgColor(color: string) {
      this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
  @HostListener('mouseover') onMouseOver() {
      this.ChangeBgColor('red');
      this.border = '10px solid green';
  }
  @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('black');
    this.border = 'black';
  }




}
