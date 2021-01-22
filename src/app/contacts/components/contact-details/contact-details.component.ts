import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;
  isUpdated: boolean;
  private contactId: string;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {
    // reading URL Parameter - to fetch id
    this.contactId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.contactService.getContactById(this.contactId)
      .subscribe((res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

  editModalOpen() {
    this.duplicateContactData = {
      ...this.contactData
    };
  }

  async updateContactHandler() {
    console.log(this.duplicateContactData);

    const status = await this.contactService.updateContact(this.duplicateContactData);
    console.log(status);
    if (status && status.id) {
      this.isUpdated = true;
    }

  }

}
