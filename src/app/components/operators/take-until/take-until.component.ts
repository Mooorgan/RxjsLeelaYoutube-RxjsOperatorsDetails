import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, fromEvent, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss'],
})
export class TakeUntilComponent implements OnInit, OnDestroy, AfterViewInit {
  stopTimerButtonEvent$!: Observable<Event>;
  startTimerSubscription!: Subscription;

  ngOnInit(): void {}

  startTimer() {
    this.startTimerSubscription = interval(500)
      .pipe(takeUntil(this.stopTimerButtonEvent$))
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(error) {
          console.log(error);
        },
        complete() {
          console.log('Completed');
        },
      });
  }

  ngAfterViewInit(): void {
    this.stopTimerButtonEvent$ = fromEvent(
      document.getElementById('stop-timer')!,
      'click'
    );
  }

  ngOnDestroy(): void {
    this.startTimerSubscription.unsubscribe();
  }
}
