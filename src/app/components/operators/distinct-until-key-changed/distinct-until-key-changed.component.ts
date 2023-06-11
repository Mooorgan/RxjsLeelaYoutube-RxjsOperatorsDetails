import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, distinctUntilKeyChanged, from } from 'rxjs';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styleUrls: ['./distinct-until-key-changed.component.scss'],
})
export class DistinctUntilKeyChangedComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    let employees = [
      {
        id: 1,
        name: 'Leela',
      },
      {
        id: 1,
        name: 'Leela',
      },
      {
        id: 2,
        name: 'Leela2',
      },
      {
        id: 3,
        name: 'Leela',
      },
      {
        id: 4,
        name: 'Le1ela',
      },
      {
        id: 5,
        name: 'Leela',
      },
      {
        id: 6,
        name: 'Leela',
      },
    ];

    //-----------------------------------------------------------------------------------------
    // this.subscription = from(employees)
    //   .pipe(distinctUntilKeyChanged('name'))
    //   .subscribe((data) => console.log(data));

    //-----------------------------------------------------------------------------------------
    this.subscription = from(employees)
      .pipe(
        distinctUntilKeyChanged('name', (prev, curr) => {
          return prev.substring(0, 5) === curr.substring(0, 5);
        })
      )
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
