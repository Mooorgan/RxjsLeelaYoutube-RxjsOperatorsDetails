import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AsyncSubject,
  ReplaySubject,
  Subject,
  Subscription,
  connect,
  connectable,
  interval,
  share,
  take,
} from 'rxjs';

@Component({
  selector: 'app-connectable-replay',
  templateUrl: './connectable-replay.component.html',
  styleUrls: ['./connectable-replay.component.scss'],
})
export class ConnectableReplayComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;

  ngOnInit(): void {
    const source$ = connectable(interval(1000), {
      // connector: () => new ReplaySubject(),
      // connector: () => new ReplaySubject(2, 5000),
      connector: () => new Subject(),
      // resetOnDisconnect: true, //Default is true
    });
    this.subscription1 = source$.subscribe((data) => {
      console.log(`observer 1: ${data}`);
    });
    const un = source$.connect();
    setTimeout(() => {
      un.unsubscribe();
      source$.connect();
    }, 4000);
    setTimeout(() => {
      this.subscription2 = source$.subscribe((data) => {
        console.log(`observer 2: ${data}`);
      });
      // source$.connect();
    }, 6000);
    // source$.connect();
    //--------------------------------------------------------------------------------------------
    // const source$ = interval(1000).pipe(
    //   share({
    //     connector() {
    //       return new Subject();
    //     },
    //     resetOnRefCountZero: false, //Default is true.
    //   })
    // );
    // this.subscription1 = source$.subscribe((data) => {
    //   console.log(`observer 1: ${data}`);
    // });
    // setTimeout(() => {
    //   this.subscription1.unsubscribe();
    // }, 4000);
    // setTimeout(() => {
    //   this.subscription2 = source$.subscribe((data) => {
    //     console.log(`observer 2: ${data}`);
    //   });
    //   // source$.connect();
    // }, 6000);
    // // source$.connect();
    //---------------------------------------------------------------------------------------
    // const try$ = interval(1000);
    // const subs = try$.subscribe((value) => console.log(value));
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }
}
