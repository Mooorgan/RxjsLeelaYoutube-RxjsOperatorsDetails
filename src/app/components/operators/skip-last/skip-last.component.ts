import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, of, skipLast } from 'rxjs';

@Component({
  selector: 'app-skip-last',
  templateUrl: './skip-last.component.html',
  styleUrls: ['./skip-last.component.scss'],
})
export class SkipLastComponent implements OnInit, OnDestroy {
  skipLastSubscription!: Subscription;
  ngOnInit(): void {
    this.skipLastSubscription = interval(500)
      .pipe(skipLast(4))
      .subscribe({
        next(data) {
          console.log(data);
        },
        error(err) {
          console.log(err);
        },
        complete() {
          console.log('skipLast operator completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.skipLastSubscription.unsubscribe();
  }
}
