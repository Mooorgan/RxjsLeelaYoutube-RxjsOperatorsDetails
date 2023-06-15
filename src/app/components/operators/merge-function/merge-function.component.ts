import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, merge, of } from 'rxjs';

@Component({
  selector: 'app-merge-function',
  templateUrl: './merge-function.component.html',
  styleUrls: ['./merge-function.component.scss'],
})
export class MergeFunctionComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    const source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      // observer.error('ha ha ha');
      setTimeout(() => {
        observer.next(4);
        observer.complete();
      }, 2000);
    });
    const source2$ = of('a', 'b');

    this.subscription = merge(source1$, source2$).subscribe({
      next(value) {
        console.log(value);
      },
      error: (err) => {
        console.log(`Error is ${err}`);
      },
      complete: function () {
        console.log('completed');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
