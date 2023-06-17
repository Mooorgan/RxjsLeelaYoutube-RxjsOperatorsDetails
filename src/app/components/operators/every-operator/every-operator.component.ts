import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, every, of } from 'rxjs';

@Component({
  selector: 'app-every-operator',
  templateUrl: './every-operator.component.html',
  styleUrls: ['./every-operator.component.scss'],
})
export class EveryOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ =
      // of(1, 20, 3, 4, 15, 6, 7, 10, 9);
      new Observable<number>((observer) => {
        observer.next(7);
        observer.next(14);
        observer.next(21);
        observer.next(71);
        setTimeout(() => {
          observer.next(28);
          observer.next(36);
          observer.next(35);
          observer.complete();
        }, 3000);
      });
    this.subscription = source$
      .pipe(
        every((val) => {
          // return val % 5 === 0;
          // return val > 0;
          return val % 7 === 0;
        })
      )
      .subscribe({
        next: (value) => {
          console.log(`Result is: ${value}`);
        },
        error: (err) => {
          console.log(`Error isss: ${err}`);
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
