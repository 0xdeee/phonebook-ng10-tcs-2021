import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1 of CPB: have a variable with data and bind it in html
  @Input() age = 10; // Step 2 of CPB: Let's make the variable as custom property -- using @Input()
  // @Input() is a decorator -- is making the variable become custom property to app-cpb selector

  // Step 3 of CPB -- refer concepts.comp.html

  constructor() { }

  ngOnInit(): void {
  }

}
