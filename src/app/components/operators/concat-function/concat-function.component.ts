import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, concat, of } from 'rxjs';

@Component({
  selector: 'app-concat-function',
  templateUrl: './concat-function.component.html',
  styleUrls: ['./concat-function.component.scss'],
})
export class ConcatFunctionComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    const source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      setTimeout(() => {
        observer.next(3);
        // observer.error('Error');
        observer.complete();
      }, 3000);
    });
    const source2$ = of('a', 'b', 'c', 'd');
    this.subscription = concat(source1$, source2$).subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
