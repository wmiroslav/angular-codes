
import * as _ from 'lodash';
import { Observable, BehaviorSubject } from 'rxjs';



class DataStore {
  // private items: any[] = [];
  private itemsListSubject = new BehaviorSubject([]); // subject is private!
  public itemsList$: Observable<any> = this.itemsListSubject.asObservable();


  initialize(newItems: any) {
    // this.items = _.cloneDeep(newList);
    // this.broadcast();
    this.itemsListSubject.next(_.cloneDeep(newItems));
  }

  add(newItem: any) {
    // this.items.push(_.cloneDeep(newLesson));
    // this.broadcast();
    const items = this.clone();
    items.push(_.cloneDeep(newItem));
    this.itemsListSubject.next(items);
  }

  delete(deleted: any) {
    // _.remove(this.items, item => item.id === deleted.id);
    // this.broadcast();
    const items = this.clone();
    _.remove(items, item => item.id === deleted.id);
    this.itemsListSubject.next(items);
  }

  private clone() {
    return _.cloneDeep(this.itemsListSubject.getValue());
  }

  // broadcast() {
  //   this.itemsListSubject.next(_.cloneDeep(this.items));
  // }

}

export const store = new DataStore();

