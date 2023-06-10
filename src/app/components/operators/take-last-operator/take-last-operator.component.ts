import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-take-last-operator',
  templateUrl: './take-last-operator.component.html',
  styleUrls: ['./take-last-operator.component.scss'],
})
export class TakeLastOperatorComponent implements OnInit, OnDestroy {
  takeLastObservable$!: Subscription;
  ngOnInit(): void {
    this.takeLastObservable$ = interval(500)
      .pipe(take(5), takeLast(2))
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.takeLastObservable$.unsubscribe();
  }
}
