import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, last, of, tap } from 'rxjs';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.scss'],
})
export class LastComponent implements OnInit, OnDestroy {
  subscription0!: Subscription;
  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  ngOnInit(): void {
    this.subscription0 = of(1, 2, 3, 4)
      .pipe(last())
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(error) {
          console.log(`Error isss ${error}`);
        },
        complete() {
          console.log('completed');
        },
      });
    this.subscription1 = of(1, 2, 3, 4, 8, 7, 9, 11)
      .pipe(last((value) => value % 2 === 0))
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(error) {
          console.log(`Error isss ${error}`);
        },
        complete() {
          console.log('completed');
        },
      });

    this.subscription2 = of(1, 3, 5)
      .pipe(last((value) => value % 2 === 0, 100))
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(error) {
          console.log(`Error isss ${error}`);
        },
        complete() {
          console.log('completed');
        },
      });
    this.subscription3 = interval(1000)
      .pipe(
        tap((value) => console.log(value)),
        last((value) => value % 2 === 0, 100)
      )
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(error) {
          console.log(`Error isss ${error}`);
        },
        complete() {
          console.log('completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription0 && this.subscription0.unsubscribe();
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
    this.subscription3 && this.subscription3.unsubscribe();
  }
}
