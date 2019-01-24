import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class CloseService {
  private subject = new Subject();
  close$: Observable<any> = this.subject.asObservable();
  constructor() { }
  close() {
    this.subject.next();
  }
}
