import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, defaultIfEmpty, of } from 'rxjs';

@Component({
  selector: 'app-default-if-empty-operator',
  templateUrl: './default-if-empty-operator.component.html',
  styleUrls: ['./default-if-empty-operator.component.scss'],
})
export class DefaultIfEmptyOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ =
      // of(1, 2, 3, 4, 5);
      // of();
      new Observable((observer) => {
        // observer.next(1);
        // observer.next(2);
        // observer.next(3);
        setTimeout(() => {
          // observer.next(4);
          observer.complete();
        }, 3000);
      });
    this.subscription = source$.pipe(defaultIfEmpty('abcd')).subscribe({
      next: (value) => {
        console.log(`Result is: ${value}`);
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
