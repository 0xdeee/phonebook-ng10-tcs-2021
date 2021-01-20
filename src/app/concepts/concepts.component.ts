import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .redText{
      color: red;
    }
    `
  ]
})
export class ConceptsComponent implements OnInit {

  //   public vars/ private vars
  // string interpolation related
  appName = 'Phone Book App!';
  totalDevelopers = 10;

  // property binding related
  companyName = 'TCS';
  isLoggedIn = true;

  // two way binding related
  courseName = 'Angular';

  // CEB related
  dataReceivedFromChild;

  constructor() { }

  ngOnInit(): void {
  }

  // event binding related
  clickMeHandler(event): void {
    console.log(event);
    alert('clicked');
    // todo: change the button text onclick to 'Clicked'
  }

  // Step 5 of CEB: Get the data from Child comp in event obj
  loadedProfileHandler(event): void {
    console.log('Handling Emitted Custom Event');
    console.log(event);
    this.dataReceivedFromChild = event;
  }
}
