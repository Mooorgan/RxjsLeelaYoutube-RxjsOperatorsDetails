import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, findIndex, first, of } from 'rxjs';

@Component({
  selector: 'app-find-index-operator',
  templateUrl: './find-index-operator.component.html',
  styleUrls: ['./find-index-operator.component.scss'],
})
export class FindIndexOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = of(1, 20, 3, 4, 15, 6, 7, 10, 9);
    this.subscription = source$
      .pipe(
        findIndex((val) => {
          // return val % 5 === 0;
          return val > 100; //Returns -1 as not Found;
        })
        // first((val) => {
        //   return val % 5 === 0;
        //   // return val > 100; //Returns error as not Found;
        // })
      )
      .subscribe({
        next: (value) => {
          console.log(`Result is: ${value}`);
        },
        error: (err) => {
          console.log(`Error isss: ${err}`);
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
