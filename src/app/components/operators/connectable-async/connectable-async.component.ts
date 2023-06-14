import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncSubject, Subscription, connectable, interval, take } from 'rxjs';

@Component({
  selector: 'app-connectable-async',
  templateUrl: './connectable-async.component.html',
  styleUrls: ['./connectable-async.component.scss'],
})
export class ConnectableAsyncComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;

  ngOnInit(): void {
    const source$ = connectable(interval(1000).pipe(take(5)), {
      connector: () => new AsyncSubject(),
    });

    this.subscription1 = source$.subscribe((data) => {
      console.log(`observer 1: ${data}`);
    });

    setTimeout(() => {
      this.subscription2 = source$.subscribe((data) => {
        console.log(`observer 2: ${data}`);
      });
    }, 4000);

    source$.connect();
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }
}
