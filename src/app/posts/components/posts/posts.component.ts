import {
  Component,
  OnInit,
   ComponentRef,
   ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  AfterContentInit,
  TemplateRef,
  OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { combineLatest, zip, forkJoin } from 'rxjs';
import { ModalComponent } from '@modal/modal/modal.component';
import { ApiService } from '@visla/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnInit, OnDestroy, AfterContentInit {

  posts: any[];
  selectedPost;
  dataSub: Subscription;
  post: ComponentRef<ModalComponent> = null;
  @ViewChild('post', {read: ViewContainerRef}) postContainerRef: ViewContainerRef; // ViewContainerRef - za dynamic kreiranje komponente
  @ViewChild('post3Content') post3Content: TemplateRef<any>;
  constructor(private resolver: ComponentFactoryResolver, private api: ApiService) { }

  ngOnInit() {
    const first = this.api.getData(1);
    const second = this.api.getData(2);
    const third = this.api.getData(3);
    this.dataSub = zip(first, second, third).subscribe((response: Array<any>) => {
        this.posts = response;
        this.selectPost(this.posts[0]);
        console.log(response);
      }, (error) => {
          console.log(error);
      }, () => {
        console.log('completed');
      });
  }
  ngOnDestroy() {
    this.dataSub.unsubscribe();
  }

  ngAfterContentInit() {
  }

  selectPost(post: any) {
    this.selectedPost = post;
  }

  openModal() {
    if (!this.postContainerRef) {
      return;
    }
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    this.post = this.postContainerRef.createComponent(factory);
    this.post.instance.title = 'Dynamic';
    this.post.instance.body = this.post3Content;
    this.post.instance.dismiss.subscribe((x) => {
      this.post.destroy();
    });
  }



  trackByFn(index, item) {
    return item.id;
  }



}
