import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, take, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from-operator',
  templateUrl: './with-latest-from-operator.component.html',
  styleUrls: ['./with-latest-from-operator.component.scss'],
})
export class WithLatestFromOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = interval(1000).pipe(take(10));
    this.subscription = source$
      .pipe(
        withLatestFrom(
          interval(100)
            .pipe
            // take(2)
            ()
        )
        // take(10)
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
