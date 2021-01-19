import { Component } from '@angular/core';

// Decorator -- unifies the html, css, ts of this comp 
@Component({
  selector: 'app-root', // exposed in a selector -- element selector -- mandatory
  templateUrl: './app.component.html', // html -- template is mandatory and it should be only one
  styleUrls: ['./app.component.css'] //css -- optional and can be multiple
})
export class AppComponent {
  // ts 
  title = 'phonebook-ng10-tcs';
}
