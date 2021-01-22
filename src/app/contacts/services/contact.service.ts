import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

// Decorator
// @Injectable will make ContactService class - dependency injectable
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {

  }

  // 1. get the form data from the comp
  createContact(contactData: any): any {
    console.log(contactData);

    // 2. send the above form data to the REST API
    // 2.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users/
    // 2.2. What's the REST API Client? HttpClient -- we dependency injected
    // 2.3. What's the Http Method? POST
    return this.http.post(this.REST_API_URL, contactData)
      .pipe(map((res: any) => { // 3. get the resp from REST API
        console.log(res);
        return res;  // 4. send it back to the comp ts
      }));

  }

  getContacts() { // 1. get the req from the comp
    console.log('Inside Service');
    // 2. send the req to the REST_API_URL with GET method using HttpClient
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: any) => {  // 3. get the resp from REST API
        console.log(res);
        // sort, filter, remove, add, manipulate, convert to json
        return res; // 4. send it back to the comp ts
      }));
  }

  getContactById(contactId: string) {
    console.log(contactId);
    return this.http.get(this.REST_API_URL + contactId)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  updateContact(contactData: any) {

    console.log(contactData);

    const updateContact: any = new Promise((resolve, reject) => {

      this.http.put(this.REST_API_URL + contactData.id, contactData)
        .toPromise()
        .then((res: any) => {
          console.log(res);
          resolve(res);
        })
        .catch((err: any) => {
          console.log('Error occured');
          console.log(err);
          reject(err);
        })
        .finally(() => {
          console.log('Into Finally');
        });

    });

    return updateContact;
  }

}
