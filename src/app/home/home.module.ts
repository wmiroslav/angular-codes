import { HighlightDirective } from './directives/highlight.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { HomeRoutingModule } from './routing';
import { RootComponent } from './root/root.component';
import { WrapperComponent } from '.';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomepageComponent,
    AboutComponent,
    RootComponent,
    HighlightDirective,
    WrapperComponent
  ]
})
export class HomeModule { }
