import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, concat, concatMap, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer-function',
  templateUrl: './timer-function.component.html',
  styleUrls: ['./timer-function.component.scss'],
})
export class TimerFunctionComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;

  ngOnInit(): void {
    const data$ = of(1, 2, 3, 4);
    // this.subscription1 = timer(3000)
    //   .pipe(concatMap(() => data$))
    //   .subscribe(console.log);
    this.subscription1 = timer(0, 2000).subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }
}
