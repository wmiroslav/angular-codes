import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { transformator } from './transformator';
import { flatMap, switchMap, mergeMap } from 'rxjs/operators';
import { Subject, Observable, interval, pipe, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  subject = new Subject();
  constructor(private http: HttpClient) {
    setInterval(() => {
      this.subject.next('Fake service subject...');
    }, 2000);
  }


  fakeService() {
    return this.subject;
  }


  getData(id: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.get<any[]>(url)
    .pipe(
      transformator()
    );
  }

  downloadPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts/';
    const req = new HttpRequest('GET', url, {
      reportProgress: true,
      responseType: 'blob'
    });
    return this.http.request(<any>req);
  }


  flatMapExample() {
    const url1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const url2 = 'https://jsonplaceholder.typicode.com/posts/20';
    return this.http.get(url1)
      .pipe(
        flatMap (
          (response) => {
            // console.log('first response', response);
            // now get another request
            return this.http.get(url2);
          }
        )
      );
  }




}
