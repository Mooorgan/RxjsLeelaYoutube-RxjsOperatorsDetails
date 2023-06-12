import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss'],
})
export class AjaxComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  subscription1!: Subscription;
  subscription2!: Subscription;
  ngOnInit(): void {
    this.subscription = ajax('https://jsonplaceholder.typicode.com/posts/')
      .pipe(
        map((response: any) => {
          // let data = [];
          // for (let post of response.response) {
          //   data.push(post.title);
          // }
          // return data;
          return response;
        })
      )
      .subscribe((data) => console.log(data));

    this.subscription1 = ajax
      .getJSON('https://jsonplaceholder.typicode.com/posts/')
      .subscribe((data) => console.log(data));

    this.subscription2 = ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/',
      method: 'POST',
      headers: {
        leela: 'Leela Web Dev',
        'content-type': 'application/json',
      },
      body: {
        title: 'Leela Web Dev',
      },
    }).subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }
}
