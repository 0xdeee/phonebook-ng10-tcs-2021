import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Have form tag equivalent in TS
  addContactForm: FormGroup;

  isSaved: boolean;

  constructor(private contactService: ContactService) { // 1. connect to the service [of CRUD Flow] using dependency injection

  }

  ngOnInit(): void {
    // Step 1 continues...
    this.addContactForm = new FormGroup({
      // Step 2: Have Form control equivalents in TS
      name: new FormControl('arun', Validators.required), // Step 5: work on validation
      phone: new FormControl('121525235', Validators.required), // todo: work with minlength validation - min 10 characters
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    });

    // Refer html for step 3 of reactive forms
  }

  addContactHandler(): void {
    console.log(this.addContactForm); // you can find the whole form's state
    console.log(this.addContactForm.value);

    // 2. send the data to the service
    this.contactService.createContact(this.addContactForm.value)
      .subscribe((res: any) => { // 3. get the resp from service
        console.log(res);
        if (res && res.id) {
          this.isSaved = true;
        }
      });
  }

}
