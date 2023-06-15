import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, catchError, of, retry, take } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss'],
})
export class RetryComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = new Observable((observer) => {
      observer.next('a');
      observer.next('b');
      observer.error('Error Occurred');
    });

    this.subscription = source$
      .pipe(
        retry(2),
        catchError((error, caught) => {
          return of(1, 2, 3, 4);
        })
      )
      .subscribe({
        next: console.log,
        error: (err) => {
          console.log(`Error iss ${err}`);
        },
        complete() {
          console.log('Completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
