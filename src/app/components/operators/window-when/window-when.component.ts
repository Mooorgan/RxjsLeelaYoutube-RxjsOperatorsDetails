import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subscription,
  interval,
  mergeMap,
  toArray,
  windowToggle,
  windowWhen,
} from 'rxjs';

@Component({
  selector: 'app-window-when',
  templateUrl: './window-when.component.html',
  styleUrls: ['./window-when.component.scss'],
})
export class WindowWhenComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = interval(500);

    this.subscription = source$
      .pipe(
        windowWhen(() => interval(2000)),
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
