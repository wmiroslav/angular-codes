
import { Directive, Input, TemplateRef, ViewContainerRef, ContentChild, AfterContentInit, OnInit, OnDestroy } from '@angular/core';
import { CloseService } from '../services/close.service';

@Directive({
  selector: '[appOpenModal]'
})
export class OpenModalDirective implements OnInit, OnDestroy {

  private elements: HTMLBaseElement[];
  @Input() set appOpenModal(els) {
    if (els.length) {
      this.elements = els;
    } else {
      this.elements = [els];
    }
    this.elements.forEach(el => {
      if (el) {
        el.addEventListener('click', this.clickHandler);
      }
    });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private closeService: CloseService,
    private viewContainer: ViewContainerRef) {
  }

  clickHandler = (() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
  }).bind(this);

  ngOnInit() {
    this.closeService.close$.subscribe(() => {
      this.viewContainer.clear();
    });
  }

  ngOnDestroy() {
    this.elements.forEach(el => {
      el.removeEventListener('click', this.clickHandler);
    });
  }

}


