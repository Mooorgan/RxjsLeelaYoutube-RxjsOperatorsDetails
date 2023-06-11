import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, throttle } from 'rxjs';

@Component({
  selector: 'app-throttle',
  templateUrl: './throttle.component.html',
  styleUrls: ['./throttle.component.scss'],
})
export class ThrottleComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    this.subscription = interval(1000)
      .pipe(
        throttle(
          (value) => {
            return interval(2000);
          },
          { leading: true, trailing: true }
        )
      )
      .subscribe((value) => console.log(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
