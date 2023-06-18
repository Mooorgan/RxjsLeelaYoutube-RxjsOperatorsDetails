import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, mergeMap, toArray, windowTime } from 'rxjs';

@Component({
  selector: 'app-window-time',
  templateUrl: './window-time.component.html',
  styleUrls: ['./window-time.component.scss'],
})
export class WindowTimeComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = interval(500);

    this.subscription = source$
      .pipe(
        windowTime(2000, 5000),
        mergeMap((val) => {
          return val.pipe(toArray());
        })
      )

      .subscribe({
        next(value) {
          console.log(value);
        },
        error(err) {
          console.log(`Error isss ${err}`);
        },
        complete() {
          console.log(' Completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
