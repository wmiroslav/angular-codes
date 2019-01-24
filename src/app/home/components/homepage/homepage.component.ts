import { Component, OnInit } from '@angular/core';
import { WrapperComponent } from '../wrapper/wrapper.component';
import { User } from '@visla/home/models/User';
import { AngularData } from '@visla/home/interfaces/AngularData';

// type
type Angular = 'Angular' | 'angular' | 'AngularJS';
// type Numeric = [number, string];
type Numeric = number | string;
// enum
export enum TOGGLE_STATUS {
  SUCCESS = 'success',
  DANGER = 'danger'
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent extends WrapperComponent implements OnInit {
  public title: Angular = 'Angular';
  public version: Numeric = 6;
  public data: AngularData = {
    name: 'Angular',
    version: 6
  };
  user: User;

  constructor() {
    super();
    if ('success' === TOGGLE_STATUS.SUCCESS) {
      console.log('SUCCESS');
    }
    this.user = new User('John');
    console.table([this.user]);
    const number: number = this.print(123);
    console.log(number);
  }

  private print<T>(arg: T): T {
    return arg;
  }

  ngOnInit() { }

}
