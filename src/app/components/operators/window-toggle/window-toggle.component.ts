import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, mergeMap, toArray, windowToggle } from 'rxjs';

@Component({
  selector: 'app-window-toggle',
  templateUrl: './window-toggle.component.html',
  styleUrls: ['./window-toggle.component.scss'],
})
export class WindowToggleComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = interval(500);

    this.subscription = source$
      .pipe(
        windowToggle(interval(1000), () => {
          return interval(2000);
        }),
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
