import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomattributedirective]'
})
export class CustomattributedirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2)
  {
    this.ChangeBgColor('red');
  }
  ChangeBgColor(color: string) {
      this.renderer.setStyle(this.el.nativeElement,'color',color);
  }

}
