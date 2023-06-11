import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, of, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss'],
})
export class TakeWhileComponent implements OnInit, OnDestroy {
  takeWhileSubscription!: Subscription;
  ngOnInit(): void {
    this.takeWhileSubscription = interval(500)
      // this.takeWhileSubscription = of(1, 2, 3, 4, 5, 1, 2, 3)
      .pipe(takeWhile((x) => x < 5, false))
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(error) {
          console.log(error);
        },
        complete() {
          console.log('completed takeWhile');
        },
      });
  }

  ngOnDestroy(): void {
    this.takeWhileSubscription.unsubscribe();
  }
}
