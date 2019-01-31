import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[dropdownContent]'
})
export class DropdownContentDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private parent: DropdownDirective) {
      console.log(this.parent);
      this.parent.hover$.subscribe(isHover => {
        if (isHover) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
    }

}
