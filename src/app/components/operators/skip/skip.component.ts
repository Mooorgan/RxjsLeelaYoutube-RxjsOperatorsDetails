import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, of, skip, take } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss'],
})
export class SkipComponent implements OnInit, OnDestroy {
  skipSubscription!: Subscription;

  ngOnInit(): void {
    // this.skipSubscription = interval(500)
    //   .pipe(take(10), skip(5))
    //   .subscribe({
    //     next(data) {
    //       console.log(data);
    //     },
    //     error(err) {
    //       console.log(err);
    //     },
    //     complete() {
    //       console.log('Skip Completed');
    //     },
    //   });
    this.skipSubscription = of(1, 2, 3, 4)
      .pipe(
        skip(4)
        // skip(5)
      )
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(err) {
          console.log(err);
        },
        complete() {
          console.log('Skip Completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.skipSubscription.unsubscribe();
  }
}
