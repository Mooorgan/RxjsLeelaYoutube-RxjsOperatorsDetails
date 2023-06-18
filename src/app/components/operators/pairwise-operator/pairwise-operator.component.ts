import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of, pairwise } from 'rxjs';

@Component({
  selector: 'app-pairwise-operator',
  templateUrl: './pairwise-operator.component.html',
  styleUrls: ['./pairwise-operator.component.scss'],
})
export class PairwiseOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6);

    this.subscription = source$
      .pipe(pairwise())

      .subscribe({
        next(value) {
          console.log(value);
        },
        error(err) {
          console.log(`Error isss ${err}`);
        },
        complete() {
          console.log(' Completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
