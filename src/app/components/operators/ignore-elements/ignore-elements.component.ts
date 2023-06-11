import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, ignoreElements, interval, of, take } from 'rxjs';

@Component({
  selector: 'app-ignore-elements',
  templateUrl: './ignore-elements.component.html',
  styleUrls: ['./ignore-elements.component.scss'],
})
export class IgnoreElementsComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    this.subscription =
      // of(1, 2, 3, 4, 5, 6)
      // interval(1000)
      interval(1000)
        .pipe(take(5), ignoreElements())
        .subscribe({
          next(value) {
            console.log(value);
          },
          error(err) {
            console.log(`Error isss ${err}`);
          },
          complete() {
            console.log('Observable is Completed');
          },
        });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
