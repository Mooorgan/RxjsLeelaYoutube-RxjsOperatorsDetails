import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'app-combine-latest-function',
  templateUrl: './combine-latest-function.component.html',
  styleUrls: ['./combine-latest-function.component.scss'],
})
export class CombineLatestFunctionComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    const source1$ = new Observable((observer) => {
      observer.next(1);
    });
    const source2$ = new Observable((observer) => {
      setTimeout(() => {
        observer.next(10);
      }, 4000);
    });

    this.subscription = combineLatest([source1$, source2$]).subscribe(
      console.log
    );
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
