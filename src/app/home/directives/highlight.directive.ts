import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  private defaultColor = 'orange';
  // tslint:disable-next-line:no-input-rename
  @Input('highlight') color;
  @HostBinding('style.color') private _color: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2) {
      // change with HostBinding
      this._color = this.defaultColor;
    }


  ngOnInit() {
    // direct access to native element:
    this.elementRef.nativeElement.style.backgroundColor = 'green';

    // access with rederer wrapper (for SSR stc.)
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px solid red');
  }

  // dekorator na funkciji
  @HostListener('mouseenter', ['$event'])
  hover($event: Event) {
    this._color = this.color;
  }
  @HostListener('mouseleave', ['$event'])
  mouseleave($event: Event) {
    this._color = this.defaultColor;
  }
}
