import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, catchError, of, take } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.scss'],
})
export class CatchErrorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = new Observable((observer) => {
      observer.next('a');
      observer.next('b');
      observer.error('Error Occurred');
    });

    this.subscription = source$
      .pipe(
        catchError((error, caught) => {
          // throw error;
          // throw 'Error is thrown so fast!';
          // return of(1, 2, 3, 4);
          return caught;
        }),
        take(5)
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
