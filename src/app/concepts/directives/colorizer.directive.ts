import { Directive, ElementRef } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]'  // attribute selector
})
export class ColorizerDirective {

  constructor( private elRef: ElementRef ) {
    console.log('applying directive');
    console.log(this.elRef.nativeElement);

    // changing dom with JS
    let el = this.elRef.nativeElement;
    el.style.backgroundColor = 'red';
    el.style.color = '#fff';

  }

}
