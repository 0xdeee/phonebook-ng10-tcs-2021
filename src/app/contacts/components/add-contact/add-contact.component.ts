import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Have form tag equivalent in TS
  addContactForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // Step 1 continues...
    this.addContactForm = new FormGroup({
      // Step 2: Have Form control equivalents in TS
      name: new FormControl('', Validators.required), // Step 5: work on validation
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [ Validators.required, Validators.email ])
    });

    // Refer html for step 3 of reactive forms
  }

  addContactHandler(): void {
    console.log(this.addContactForm); // you can find the whole form's state
    console.log(this.addContactForm.value);
  }

}
