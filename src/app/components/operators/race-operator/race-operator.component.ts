import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, map, race, tap } from 'rxjs';

@Component({
  selector: 'app-race-operator',
  templateUrl: './race-operator.component.html',
  styleUrls: ['./race-operator.component.scss'],
})
export class RaceOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source1$ = interval(1000).pipe(
      map((v) => {
        return 'First one: ' + v;
      })
    );
    const source2$ = interval(2000).pipe(
      map((v) => {
        return 'Second one: ' + v;
      }),
      tap(() => {
        throw 'error in second one';
      })
    );
    const source3$ = interval(3000).pipe(
      map((v) => {
        return 'Third one: ' + v;
      })
    );
    this.subscription = race(source1$, source2$, source3$).subscribe(
      console.log
    );
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
