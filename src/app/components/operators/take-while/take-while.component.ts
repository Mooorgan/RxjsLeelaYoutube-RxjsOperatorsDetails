import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.scss'],
})
export class TakeWhileComponent implements OnInit, OnDestroy {
  takeWhileSubscription!: Subscription;
  ngOnInit(): void {
    this.takeWhileSubscription = interval(500)
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
