import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1 of CEB:
  // Let's create an object for EventEmitter Class
  @Output() loadedProfile = new EventEmitter(); // Step 2 of CEB - making it custom event by using @Output() to the selector app-ceb

  constructor() {
  }

  ngOnInit(): void {
  }

  loadDataHandler(): void{
    console.log('About to Emit Custom Event With data....');
    // Step 3 of CEB: Let's emit the event
    setTimeout( () => {
      this.loadedProfile.emit('Arun'); // sending data to the parent comp
    }, 5000);
    // Step 4 of CEB: Let's handle the emitted event in concepts.comp.html
  }
}
