import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, distinct, from, of } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.scss'],
})
export class DistinctComponent implements OnInit, OnDestroy {
  distinctSubscription1!: Subscription;
  distinctSubscription2!: Subscription;
  ngOnInit(): void {
    this.distinctSubscription1 = of(1, 2, 3, 4, 5, 1, 2, 3, 4, 6)
      .pipe(distinct())
      .subscribe((value) => {
        console.log(value);
      });

    const employees = [
      {
        id: 1,
        name: 'Leela',
      },
      {
        id: 2,
        name: 'Leela1',
      },
      {
        id: 3,
        name: 'Leela',
      },
      {
        id: 4,
        name: 'Leela6',
      },
    ];

    this.distinctSubscription2 = from(employees)
      .pipe(distinct(({ name }) => name))
      .subscribe((value) => console.log(value));
  }

  ngOnDestroy(): void {
    this.distinctSubscription1.unsubscribe();
    this.distinctSubscription2.unsubscribe();
  }
}
