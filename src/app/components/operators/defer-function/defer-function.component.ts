import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subscription, defer, of, throwError } from 'rxjs';

@Component({
  selector: 'app-defer-function',
  templateUrl: './defer-function.component.html',
  styleUrls: ['./defer-function.component.scss'],
})
export class DeferFunctionComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;
  ngOnInit(): void {
    const source$ = defer(() => {
      if (Math.random() > 0.5) {
        // return of(1, 2, 3, 4, 5);
        // throw 'ha ha';
        // const throwError$ = throwError(() => 'ha ha ha Error');
        // return throwError$;
        return EMPTY;
      } else {
        return of('a', 'b', 'c', 'd', 'e');
      }
    });

    this.subscription1 = source$.subscribe({
      next: console.log,
      error: (err) => {
        return `Error isss ${err}`;
      },
      complete: () => {
        console.log('Completed');
      },
    });

    this.subscription2 = source$.subscribe({
      next: console.log,
      error: (err) => {
        return `Error isss ${err}`;
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }
}
