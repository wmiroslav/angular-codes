import { ModalModule } from '../modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { ModalsRoutingModule } from './routing';
import { RootComponent } from './root/root.component';
import { ElementsComponent } from './components/elements/elements.component';
import { SimpleComponent } from './components/simple/simple.component';
import { SimpleDirective } from './directives/simple.directive';

@NgModule({
  imports: [
    CommonModule,
    ModalsRoutingModule,
    ModalModule
  ],
  declarations: [
    PostsComponent,
    SimpleDirective,
    RootComponent,
    ElementsComponent,
    SimpleComponent]
})
export class PostsModule { }
