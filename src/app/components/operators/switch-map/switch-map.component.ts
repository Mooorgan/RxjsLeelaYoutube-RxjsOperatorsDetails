import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subject,
  Subscription,
  exhaustMap,
  filter,
  interval,
  map,
  of,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss'],
})
export class SwitchMapComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  ngOnInit(): void {
    this.subscription1 = of(1, 2, 3, 4)
      // interval(200)
      .pipe(
        filter((id) => id > 0),
        // take(6),
        tap((value) => console.log(value)),
        switchMap((id) => {
          // console.log(id);
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
            map((data) => data.response)
          );
        }),

        take(8)
      )
      .subscribe((data) => {
        console.log(data);
      });

    // const subject = new Subject<number>();

    // subject.next(10);
    // subject.subscribe((value) => {
    //   console.log(value);
    // });

    // subject.next(20);
    // subject.next(30);
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
  }
}
