import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of, skipWhile } from 'rxjs';

@Component({
  selector: 'app-skip-while',
  templateUrl: './skip-while.component.html',
  styleUrls: ['./skip-while.component.scss'],
})
export class SkipWhileComponent implements OnInit, OnDestroy {
  skipWhileSubscription!: Subscription;
  ngOnInit(): void {
    this.skipWhileSubscription = of(1, 2, 3, 4, 5, 1, 2)
      .pipe(
        skipWhile((x) => {
          return x < 3;
        })
      )
      .subscribe((value) => {
        console.log(value);
      });
  }

  ngOnDestroy(): void {
    this.skipWhileSubscription.unsubscribe();
  }
}
