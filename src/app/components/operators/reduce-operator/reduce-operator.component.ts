import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of, reduce, scan } from 'rxjs';

@Component({
  selector: 'app-reduce-operator',
  templateUrl: './reduce-operator.component.html',
  styleUrls: ['./reduce-operator.component.scss'],
})
export class ReduceOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    this.subscription = source$
      .pipe(
        // scan((acc, curr) => {
        //   // console.log(`Accumulator: ${acc}`);
        //   // console.log(`value: ${curr}`);
        //   return acc + curr;
        // })
        reduce((acc, curr) => {
          console.log(`Accumulator: ${acc}`);
          console.log(`value: ${curr}`);
          return acc + curr;
        })
      )
      .subscribe({
        next: (value) => {
          console.log(`Result is: ${value}`);
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
