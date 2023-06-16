import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, count, of } from 'rxjs';

@Component({
  selector: 'app-count-operator',
  templateUrl: './count-operator.component.html',
  styleUrls: ['./count-operator.component.scss'],
})
export class CountOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6, 7, 8);
    this.subscription = source$
      .pipe(
        count((val, index) => {
          // return val%2===0;
          return val > 9;
        })
      )
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
