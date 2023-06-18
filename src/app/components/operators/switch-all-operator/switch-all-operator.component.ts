import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subscription,
  filter,
  interval,
  map,
  switchAll,
  take,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-switch-all-operator',
  templateUrl: './switch-all-operator.component.html',
  styleUrls: ['./switch-all-operator.component.scss'],
})
export class SwitchAllOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ =
      // of(1000);
      // of(1000, 500, 2000, 100);
      timer(0, 1000).pipe(
        filter((val) => val > 0),
        take(4)
      );
    this.subscription = source$
      .pipe(
        map(
          (value) =>
            interval(500).pipe(
              map(
                (val) => `parent interval ${value} with child interval ${val}`
              ),
              take(4)
            )
          // .pipe(take(4))
        ),
        switchAll()
        // exhaustAll()
        // concatAll()
      )
      .subscribe({
        next: (value) => {
          // console.log(`Result is: ${value}`);
          console.log(value);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
