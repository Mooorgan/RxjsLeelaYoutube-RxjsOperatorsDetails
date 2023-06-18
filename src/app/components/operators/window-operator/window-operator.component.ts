import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, mergeMap, toArray, window } from 'rxjs';

@Component({
  selector: 'app-window-operator',
  templateUrl: './window-operator.component.html',
  styleUrls: ['./window-operator.component.scss'],
})
export class WindowOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = interval(500);

    this.subscription = source$
      .pipe(
        window(interval(2000)),
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
