import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subscription,
  asapScheduler,
  asyncScheduler,
  audit,
  fromEvent,
  queueScheduler,
  range,
  scheduled,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-range-function',
  templateUrl: './range-function.component.html',
  styleUrls: ['./range-function.component.scss'],
})
export class RangeFunctionComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    console.log('Start Scripting');
    let source$ = scheduled(range(1, 10000), queueScheduler)
      .pipe
      // tap(console.log),
      // audit((ev) => {
      //   return fromEvent(document.getElementById('showButton')!, 'click');
      // })
      ();

    this.subscription = source$.subscribe({
      next: (res) => {
        console.log(`Result is ${res}`);
      },
      error: (err) => {
        console.log(`Error is ${err}`);
      },
      complete: () => {
        console.log('Completed');
      },
    });

    console.log('End Scripting');
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
