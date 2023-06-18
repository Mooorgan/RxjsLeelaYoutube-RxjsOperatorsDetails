import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  asapScheduler,
  asyncScheduler,
  audit,
  concat,
  concatMap,
  delay,
  exhaustMap,
  filter,
  fromEvent,
  interval,
  map,
  merge,
  observeOn,
  of,
  queueScheduler,
  range,
  scheduled,
  subscribeOn,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-scheduled-function',
  templateUrl: './scheduled-function.component.html',
  styleUrls: ['./scheduled-function.component.scss'],
})
export class ScheduledFunctionComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    // console.log('Script Starting');
    // const queueScheduler$ = scheduled(of('Queue Scheduler'), queueScheduler);
    // const asyncScheduler$ = scheduled(of('Async Scheduler'), asyncScheduler);
    // const asapScheduler$ = scheduled(of('asap Scheduler'), asapScheduler);
    // this.subscription = merge(
    //   queueScheduler$,
    //   asyncScheduler$,
    //   asapScheduler$
    // ).subscribe(console.log);
    // console.log('Script Ending');
    //----------------------------------------------------------------------------------------------
    // console.log('Start Concat');
    // const custom$ = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   setTimeout(() => {
    //     observer.next(4);
    //     observer.complete();
    //   }, 4000);
    // });
    // const of$ = of(1, 2, 3, 4);
    // this.subscription = concat(custom$, of$).subscribe({
    //   next: console.log,
    //   error: (err) => {
    //     console.log(`Error is ${err}`);
    //   },
    //   complete: () => {
    //     console.log('Completed');
    //   },
    // });
    // console.log('End Concat');
    //----------------------------------------------------------------------------------------------
    // console.log('Start Concat');
    // // this.subscription = scheduled(of(1, 2, 3, 4), asapScheduler)
    // // this.subscription = of(1, 2, 3, 4)
    // this.subscription = timer(1000, queueScheduler)
    //   // fromEvent(
    //   //   document.getElementById('showButton1')!,
    //   //   'click'
    //   // )
    //   .pipe(
    //     tap(console.log),
    //     audit((ev) => {
    //       return fromEvent(document.getElementById('showButton')!, 'click');
    //     })
    //   )
    //   .subscribe({
    //     next: (res) => {
    //       console.log(`Result is ${res}`);
    //     },
    //     error: (err) => {
    //       console.log(`Error is ${err}`);
    //     },
    //     complete: () => {
    //       console.log('Completed');
    //     },
    //   });
    // console.log('End Concat');
    //----------------------------------------------------------------------------------------------
    console.log('Start Concat');
    const custom$ = range(1, 10000).pipe(
      concatMap((value) =>
        of(value).pipe(
          // observeOn(queueScheduler),
          // delay(200, queueScheduler)
          delay(1)
          // subscribeOn(queueScheduler)
        )
      )
    );
    // interval(500);
    // new Observable((observer) => {
    //   for (let i = 1; i++, i <= 1000; ) {
    //     // setTimeout(() => {
    //     observer.next(i);
    //     // }, 3000);
    //   }
    //   setTimeout(() => {
    //     observer.next('end');
    //     observer.complete();
    //   }, 4000);
    // });
    this.subscription = custom$
      // this.subscription = scheduled(custom$, asapScheduler)
      .pipe(
        tap(console.log),
        audit((ev) => {
          return fromEvent(document.getElementById('showButton')!, 'click');
        })
      )
      .subscribe({
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
    console.log('End Concat');
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
