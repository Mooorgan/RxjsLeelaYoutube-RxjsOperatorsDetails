import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, ignoreElements, interval, of, single, tap } from 'rxjs';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription =
      // of(1, 2, 3, 4, 5, 6)
      of(1, 3, 5, 7)
        // interval(1000)
        .pipe(
          tap((value) => console.log(value)),
          // ignoreElements(),
          // single()
          single((value) => {
            // return ++value % 2 === 0;
            // return ++value % 17 === 0;
            // return value % 2 === 0;
            return value === 7;
          })
        )
        .subscribe({
          next(value) {
            console.log(`Single Value is ${value}`);
          },
          error(err) {
            console.log(`Error isss ${err}`);
          },
          complete() {
            console.log('Single Observable Completed');
          },
        });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
