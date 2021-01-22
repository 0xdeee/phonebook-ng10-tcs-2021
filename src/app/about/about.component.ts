import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  today: Date = new Date();
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

  constructor() { }

  ngOnInit(): void {
  }

}
