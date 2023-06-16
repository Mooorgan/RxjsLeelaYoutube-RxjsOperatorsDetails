import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, max, of, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-max-operator',
  templateUrl: './max-operator.component.html',
  styleUrls: ['./max-operator.component.scss'],
})
export class MaxOperatorComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;
  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6);
    this.subscription1 = source$.pipe(max()).subscribe(console.log);

    const person = [
      { name: 'Leela', age: 20 },
      { name: 'Cherry', age: 4 },
      { name: 'Luti', age: 2 },
    ];

    this.subscription2 = of(...person)
      .pipe(
        max((a, b) => {
          return a.age < b.age ? -1 : 1;
        })
      )
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }
}
