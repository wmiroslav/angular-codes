import { Directive, HostListener, ElementRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  private hoverSubject = new BehaviorSubject<boolean>(false);
  public hover$ = this.hoverSubject.asObservable().pipe(distinctUntilChanged()); 

  constructor(private _elementRef: ElementRef) { }

    @HostListener('mouseenter')
    mouseenter() {
      this.hoverSubject.next(true);
    }
    @HostListener('mouseleave')
    mouseleave() {
      this.hoverSubject.next(false);
    }

    // @HostListener('document:click', ['$event.target'])
    // hover(targetElement) {
    //   const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    //   if (clickedInside) {
    //     this.hoverSubject.next(true);
    //   } else {
    //     this.hoverSubject.next(false);
    //   }
    // }

}
