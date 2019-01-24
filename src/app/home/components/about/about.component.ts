import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver';

import { ApiService } from '@visla/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title: string;
  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.subscribeToSubject();
  }



  downloadPosts() {
    this.api.downloadPosts()
      .subscribe((response: any) => {
        const { loaded, total } = response;
        if (loaded && total) {
          const percentage = loaded / total * 100 + '%';
          console.log(percentage);
        }
        if (response.body) {
          const file = response.body;
          console.log('DOWNLOADED 1', file);
          saveAs(file, 'Post example');
        }
      }, (error) => {
        console.log(error);
      });
  }


  flip() {
    this.api.flatMapExample().subscribe((response: any) => {
      console.log('final response:', response);
      this.title = response.title;
    });
  }






  observableExample() {
    this.customObservable().subscribe(
      value => console.log(value),
      error => console.log(error),
      () => console.log('completed!')
    );
  }
  private customObservable() {
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(42);
      }, 1000);
      setTimeout(() => {
        observer.complete();
      }, 3000);
    });
  }


  private subscribeToSubject() {
    this.api.fakeService().subscribe((value) => {
      console.log(value);
    });
  }



}






