import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array-operator',
  templateUrl: './to-array-operator.component.html',
  styleUrls: ['./to-array-operator.component.scss'],
})
export class ToArrayOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ =
      // of(1, 2, 3, 4, 5);
      // of();
      new Observable((observer) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
        // setTimeout(() => {
        //   observer.next(4);
        //   observer.complete();
        // }, 3000);
      });
    this.subscription = source$.pipe(toArray()).subscribe({
      next: (value) => {
        console.log(`Result is: ${value}`);
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
