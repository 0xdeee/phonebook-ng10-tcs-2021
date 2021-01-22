import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit, OnDestroy {

  contactList: any[];
  contactSubscription: Subscription;

  constructor(private contactService: ContactService) { // 1. connect to service using dep inj
    console.log('Inside constructor');
  }

  // lifecycle hook
  ngOnInit(): void {
    // when the comp comes into view ngOnInit called automatically - after constructor
    // ideal place for us to send ajax calls

    console.log('Inside ngOnInit');

    // 2. send req to the service
    this.contactSubscription = this.contactService.getContacts()
      .subscribe((res: any) => { // 3. get resp from the service
        console.log(res);
        this.contactList = res;
      });
  }

  ngOnDestroy(): void { // lifecycle hook
    // when the comp goes out of the view ngOnDestroy will be called.
    // ideal place for you to unsubscribe, remove timeout, clear intervals, remove data
    console.log('Inside ngOnDestroy');
    this.contactSubscription.unsubscribe();
    if (this.contactList && this.contactList.length > 0) {
      this.contactList.length = 0;
    }
  }

}
