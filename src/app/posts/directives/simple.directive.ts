import { Directive } from '@angular/core';

@Directive({
  selector: '[appSimple]'
})
export class SimpleDirective {

  constructor() {
  }

  public getName(): string {
    return 'SimpleDirective';
  }

}
