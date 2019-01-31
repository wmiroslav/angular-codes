import { Component, OnInit } from '@angular/core';
import { eventBus } from '../../event-bus';

import { store } from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  message: string;
  message2: string;
  constructor() {
  }

  ngOnInit() {
    // fake emit/broadcast
    eventBus.nextObservers('MSG', {message: 'Message from event-bus'});
    // fake subscribtion
    eventBus.subscribe('MSG', this);

    // Observable Pattern
    store.initialize([{message: 'Message from Observable Pattern'}]);
    store.itemsList$.subscribe(this);
  }

  nextCustom(data: any) {
    this.message = data.message;
  }

  next = (data: any) => {
    if (data[0]) {
      this.message2 = data[0].message;
    }
  }


  error(err: any) {
  }
  complete() {

  }

}

// DEBOUNCE TIME
// autocomplete = new Subject();
// autocompleteSub: Subscription;
// constructor() {
// this.autocompleteSub = this.autocomplete.pipe(
//    debounceTime(this.delayTime)
//  ).subscribe(e => {
//    // do some code
//  });
// }
// someAction() {
//   this.autocomplete.next();
// }



