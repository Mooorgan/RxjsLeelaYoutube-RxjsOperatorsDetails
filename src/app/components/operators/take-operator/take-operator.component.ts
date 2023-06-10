import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';

@Component({
  selector: 'app-take-operator',
  templateUrl: './take-operator.component.html',
  styleUrls: ['./take-operator.component.scss'],
})
export class TakeOperatorComponent implements OnInit, OnDestroy {
  takeSubscription$!: Subscription;

  ngOnInit(): void {
    this.takeSubscription$ = interval(500)
      .pipe(take(3))
      .subscribe({
        next(value) {
          console.log(value);
        },
        error(err) {
          console.log(err);
        },
        complete() {
          console.log('Observable completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.takeSubscription$.unsubscribe();
  }
}
