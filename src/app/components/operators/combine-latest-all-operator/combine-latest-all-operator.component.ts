import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  combineLatestAll,
  interval,
  map,
  of,
  take,
} from 'rxjs';

@Component({
  selector: 'app-combine-latest-all-operator',
  templateUrl: './combine-latest-all-operator.component.html',
  styleUrls: ['./combine-latest-all-operator.component.scss'],
})
export class CombineLatestAllOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ =
      // of(1);
      // of(1, 2, 3, 4, 5);
      new Observable((observer) => {
        observer.next(1);
        observer.next(2);
        observer.complete();

        // setTimeout(() => {
        //   observer.next(3);
        // }, 2000);
        // setTimeout(() => {
        //   observer.next(3);
        //   observer.complete();
        // }, 4000);
      });
    this.subscription = source$
      .pipe(
        map((value) => interval(1000).pipe(take(4))),
        combineLatestAll()
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
