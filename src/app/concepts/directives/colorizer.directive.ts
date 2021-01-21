import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]'  // attribute selector
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef, private renderer: Renderer2) { // dependency injection
    console.log('applying directive');
    console.log(this.elRef.nativeElement);

    let el = this.elRef.nativeElement;

    // changing dom with JS
    // el.style.backgroundColor = 'red';
    // el.style.color = '#fff';

    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'color', '#fff');
    this.renderer.setStyle(el, 'height', '400px');
  }

  // @HostListener() is a decorator
  @HostListener('click', ['$event'])
  onClickHandler(evt): void{
    this.renderer.setStyle(evt.target, 'background-color', 'green');
  }

  @HostListener('mouseover', ['$event'])
  onMouseover(evt): void {
    this.renderer.setStyle(evt.target, 'background-color', 'yellow');
    this.renderer.setStyle(evt.target, 'color', 'black');
  }

}
