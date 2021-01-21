import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
// @Injectable will make ContactService class - dependency injectable
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {

  }

  // 1. get the form data from the comp
  createContact(contactData: any) {
    console.log(contactData);

    // 2. send the above form data to the REST API
      // 2.1. What's the REST API URL? https://jsonplaceholder.typicode.com/users/
      // 2.2. What's the REST API Client? HttpClient -- we dependency injected
      // 2.3. What's the Http Method? POST
    return this.http.post('https://jsonplaceholder.typicode.com/users/', contactData)
      .pipe( map( (res: any) => { // 3. get the resp from REST API
        console.log(res);
        return res;  // 4. send it back to the comp ts
      }));

  }
  
}
