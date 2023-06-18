import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, mergeMap, toArray, windowCount } from 'rxjs';

@Component({
  selector: 'app-window-count',
  templateUrl: './window-count.component.html',
  styleUrls: ['./window-count.component.scss'],
})
export class WindowCountComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = interval(500);

    this.subscription = source$
      .pipe(
        windowCount(3, 2),
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
