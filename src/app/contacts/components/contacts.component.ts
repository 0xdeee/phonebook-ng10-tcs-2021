import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit {

  contactList: any[];

  constructor( private contactService: ContactService) { // 1. connect to service using dep inj
    console.log('Inside constructor');
  }

  // lifecycle hook
  ngOnInit(): void {
    // when the comp comes into view ngOnInit called automatically - after constructor
    // ideal place for us to send ajax calls

    console.log('Inside ngOnInit');

    // 2. send req to the service
    this.contactService.getContacts()
      .subscribe( (res: any) => { // 3. get resp from the service
        console.log(res);
        this.contactList = res;
      });
  }

}
