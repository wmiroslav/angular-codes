
import * as _ from 'lodash';


export interface Observer {
    nextCustom(data: any);
  }


interface Subject {
    subscribe(eventType: string, obs: Observer);
    unsubscribe(eventType: string, obs: Observer);
    nextObservers(eventType: string, data: Observer);
}



// custom event bus
class EventBus implements Subject {

  private observers: {[key: string]: Observer[]} = {};
  private data: any;

  subscribe(eventType: string, obs: Observer) {
    if (!this.observers[eventType]) {
      this.observers[eventType] = [];
    }
    this.observers[eventType].push(obs);
    obs.nextCustom(this.data);
  }
  unsubscribe(eventType: string, obs: Observer) {
    if (this.observers[eventType]) {
      _.remove(this.observers[eventType], el => el === obs);
    }
  }
  nextObservers(eventType: string, data: any) {
    this.data = data;
    if (this.observers[eventType]) {
      this.observers[eventType].forEach(obs => obs.nextCustom(data));
    }
  }
}


export const eventBus = new EventBus();
