import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, forkJoin, of } from 'rxjs';

@Component({
  selector: 'app-fork-join-function',
  templateUrl: './fork-join-function.component.html',
  styleUrls: ['./fork-join-function.component.scss'],
})
export class ForkJoinFunctionComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    const source1$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      setTimeout(() => {
        observer.complete();
      }, 2000);
    });
    const source2$ = of('a', 'b');

    // this.subscription = forkJoin([source1$, source2$]).subscribe(console.log);
    this.subscription = forkJoin({
      source1: source1$,
      source2: source2$,
    }).subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
