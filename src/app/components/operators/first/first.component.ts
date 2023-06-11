import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, first, of } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit, OnDestroy {
  subscription0!: Subscription;
  subscription1!: Subscription;
  subscription2!: Subscription;
  ngOnInit(): void {
    this.subscription0 = of(1, 2, 3, 4)
      .pipe(first())
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
    this.subscription1 = of(1, 2, 3, 4)
      .pipe(first((value) => value % 2 === 0))
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
      .pipe(first((value) => value % 2 === 0, 100))
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
  }
}
