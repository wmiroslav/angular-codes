import { SimpleDirective } from './../../directives/simple.directive';
import { SimpleComponent } from './../simple/simple.component';
import { Component, OnInit, TemplateRef, AfterContentInit, ViewChild, ElementRef, ViewChildren, Renderer2 } from '@angular/core';
import { RootComponent } from '@visla/posts/root/root.component';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit, AfterContentInit {

  public parent: string;
  // template
  @ViewChild('template') public templateRef: TemplateRef<any>; // ng-template

  // elements
  @ViewChild('element') public elementRef: ElementRef<any>;
  @ViewChild(SimpleComponent) private simple: SimpleComponent;
  // @ViewChildren...

  // directive
  @ViewChild(SimpleDirective) public directive: SimpleDirective;

  constructor(
    private parentComponent: RootComponent,
    private element: ElementRef, // native element
    private renderer: Renderer2
    // private template: TemplateRef - in contructor used only in ng-template directive
    // ng-template and templateRef  — they are both referencing the same thing.
    ) {
    }

  ngOnInit() {
  }

  getParentName() {
    this.parent = this.parentComponent.getName();
  }

  ngAfterContentInit() {
    console.log(this.templateRef);
    console.log(this.elementRef);
    console.log(this.simple);
    console.log(this.element);
    console.log(this.directive);
  }
}


