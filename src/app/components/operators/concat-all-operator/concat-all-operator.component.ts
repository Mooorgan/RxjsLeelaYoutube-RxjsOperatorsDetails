import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  concatAll,
  interval,
  map,
  of,
  take,
} from 'rxjs';

@Component({
  selector: 'app-concat-all-operator',
  templateUrl: './concat-all-operator.component.html',
  styleUrls: ['./concat-all-operator.component.scss'],
})
export class ConcatAllOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ =
      // of(1000);
      of(1000, 500, 2000, 100);
    this.subscription = source$
      .pipe(
        map((value) => interval(value).pipe(take(4))),
        concatAll()
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
