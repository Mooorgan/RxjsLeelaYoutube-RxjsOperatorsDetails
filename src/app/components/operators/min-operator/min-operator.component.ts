import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, min, of } from 'rxjs';

@Component({
  selector: 'app-min-operator',
  templateUrl: './min-operator.component.html',
  styleUrls: ['./min-operator.component.scss'],
})
export class MinOperatorComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;
  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6);
    this.subscription1 = source$.pipe(min()).subscribe(console.log);

    const person = [
      { name: 'Leela', age: 20 },
      { name: 'Cherry', age: 4 },
      { name: 'Luti', age: 2 },
    ];

    this.subscription2 = of(...person)
      .pipe(
        min((a, b) => {
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
