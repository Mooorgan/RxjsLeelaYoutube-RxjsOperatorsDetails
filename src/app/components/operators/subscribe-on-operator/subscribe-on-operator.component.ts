import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  asyncScheduler,
  map,
  of,
  subscribeOn,
} from 'rxjs';

@Component({
  selector: 'app-subscribe-on-operator',
  templateUrl: './subscribe-on-operator.component.html',
  styleUrls: ['./subscribe-on-operator.component.scss'],
})
export class SubscribeOnOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    console.log('Hello');
    const source$ = of(1, 2, 3, 4, 5);
    this.subscription = source$
      .pipe(
        subscribeOn(asyncScheduler, 3000),
        map((data) => {
          console.log('Inside map');
          return `Hey ${data}`;
        })
        // subscribeOn(asyncScheduler)
      )
      .subscribe({
        next: (value) => {
          // console.log(`Result is: ${value}`);
          console.log(value);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        },
      });

    console.log('Bye');
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
