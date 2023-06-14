import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription, connectable, interval } from 'rxjs';

@Component({
  selector: 'app-connectable-behavior',
  templateUrl: './connectable-behavior.component.html',
  styleUrls: ['./connectable-behavior.component.scss'],
})
export class ConnectableBehaviorComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;

  ngOnInit(): void {
    const source$ = connectable(interval(1000), {
      connector: () => new BehaviorSubject(100),
    });

    source$.subscribe((data) => {
      console.log(`observer 1: ${data}`);
    });

    setTimeout(() => {
      source$.subscribe((data) => {
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
