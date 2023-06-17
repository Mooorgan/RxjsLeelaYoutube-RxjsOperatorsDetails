import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, count, isEmpty, of } from 'rxjs';

@Component({
  selector: 'app-is-empty-operator',
  templateUrl: './is-empty-operator.component.html',
  styleUrls: ['./is-empty-operator.component.scss'],
})
export class IsEmptyOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 3000);
    });
    this.subscription = source$
      .pipe(
        // count()
        isEmpty()
      )
      .subscribe({
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
