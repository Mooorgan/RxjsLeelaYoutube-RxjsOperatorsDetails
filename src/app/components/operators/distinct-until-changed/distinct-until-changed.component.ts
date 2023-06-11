import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subscription,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  from,
  of,
} from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss'],
})
export class DistinctUntilChangedComponent implements OnInit, OnDestroy {
  noparamsDistinctUntilChanged!: Subscription;
  comparatorDistinctUntilChanged!: Subscription;
  objectAndKeyDistinctUntilChanged!: Subscription;

  ngOnInit(): void {
    // this.noparamsDistinctUntilChanged = of(1, 2, 3, 3, 1, 3, 4, 5, 4, 4)
    //   .pipe(distinctUntilChanged())
    //   .subscribe((value) => {
    //     console.log(value);
    //   });
    //-------------------------------------------------------------------------------------------
    // this.comparatorDistinctUntilChanged = of(1, 2, 3, 4)
    //   .pipe(
    //     distinctUntilChanged((prev, curr) => {
    //       return curr === prev + 1;
    //     })
    //   )
    //   .subscribe((value) => console.log(value));

    //-------------------------------------------------------------------------------------------

    //reference is same here, obj1===obj2
    // const emp = { id: 7, name: 'Leela3' };
    // const employees = [
    //   { id: 1, name: 'Leela' },
    //   { id: 2, name: 'Leela1' },
    //   { id: 3, name: 'Leela' },
    //   { id: 4, name: 'Leela1' },
    //   { id: 5, name: 'Leela1' },
    //   { id: 6, name: 'Leela2' },
    //   { id: 7, name: 'Leela3' },
    //   { id: 7, name: 'Leela3' },
    //   emp,
    //   emp,
    //   emp,
    //   { id: 8, name: 'Leela3' },
    //   { id: 9, name: 'Leela2' },
    // ];
    // this.objectAndKeyDistinctUntilChanged = from(employees)
    //   .pipe(
    //     distinctUntilChanged((prev, curr) => {
    //       return prev.name === curr.name;
    //     })
    //   )
    //   .subscribe((value) => console.log(value));

    //-------------------------------------------------------------------------------------------

    // this.objectAndKeyDistinctUntilChanged = from(employees)
    //   .pipe(distinctUntilChanged())
    //   .subscribe((value) => console.log(value));

    //-------------------------------------------------------------------------------------------

    const employees = [
      { id: 1, nam: 'Leela' },
      { id: 2, nam: 'Leela1' },
      { id: 3, nam: 'Leela' },
      { id: 4, nam: 'Leela1' },
      { id: 5, nam: 'Leela1' },
      { id: 6, nam: 'Leela2' },
      { id: 7, nam: 'Leela3' },
      { id: 7, nam: 'Leela3' },
      { id: 8, nam: 'Leela3' },
      { id: 9, nam: 'Leela2' },
    ];

    this.objectAndKeyDistinctUntilChanged = from(employees)
      .pipe(
        distinctUntilChanged(
          (prev, curr) => {
            return prev === curr;
          },
          ({ nam }) => nam
        )
      )
      .subscribe((value) => console.log(value));
  }

  ngOnDestroy(): void {
    this.noparamsDistinctUntilChanged.unsubscribe();
    this.comparatorDistinctUntilChanged.unsubscribe();
    this.objectAndKeyDistinctUntilChanged.unsubscribe();
  }
}
