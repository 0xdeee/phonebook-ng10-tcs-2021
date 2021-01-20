import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  //   public vars/ private vars
  // string interpolation related
  appName = 'Phone Book App!';
  totalDevelopers = 10;

  // property binding related
  companyName = 'TCS';

  constructor() { }

  ngOnInit(): void {
  }

}
