import { ModalModule } from '../modal/modal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { ModalsRoutingModule } from './routing';
import { RootComponent } from './root/root.component';

@NgModule({
  imports: [
    CommonModule,
    ModalsRoutingModule,
    ModalModule
  ],
  declarations: [PostsComponent, RootComponent]
})
export class PostsModule { }
