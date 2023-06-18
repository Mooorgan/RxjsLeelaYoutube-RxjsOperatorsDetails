import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, startWith, take } from 'rxjs';

@Component({
  selector: 'app-start-with-operator',
  templateUrl: './start-with-operator.component.html',
  styleUrls: ['./start-with-operator.component.scss'],
})
export class StartWithOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = interval(1000);
    this.subscription = source$
      .pipe(
        take(2),
        startWith('Hello', 'This is...', 'Leela', 100, 200)
        // take(2)
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
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
