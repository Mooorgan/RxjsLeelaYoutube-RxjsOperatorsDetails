import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, asyncScheduler, map, observeOn, of, tap } from 'rxjs';

@Component({
  selector: 'app-observe-on-operator',
  templateUrl: './observe-on-operator.component.html',
  styleUrls: ['./observe-on-operator.component.scss'],
})
export class ObserveOnOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    console.log('Helloo');
    const source$ = of(1, 2, 3, 4, 5);
    this.subscription = source$
      .pipe(
        // observeOn(asyncScheduler),
        map((data) => {
          console.log('Inside map');
          return `Hey ${data}`;
        }),
        observeOn(asyncScheduler),

        tap(() => {
          console.log('tappy');
        })
        // observeOn(asyncScheduler)
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
