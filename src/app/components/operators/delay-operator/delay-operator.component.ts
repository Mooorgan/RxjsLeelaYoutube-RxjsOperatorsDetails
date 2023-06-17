import { Component } from '@angular/core';
import { Subscription, concatMap, delay, of } from 'rxjs';

@Component({
  selector: 'app-delay-operator',
  templateUrl: './delay-operator.component.html',
  styleUrls: ['./delay-operator.component.scss'],
})
export class DelayOperatorComponent {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    this.subscription = source$
      .pipe(
        // delay(2000),
        concatMap((val) => of(val).pipe(delay(1000)))
      )
      .subscribe({
        next: (value) => {
          console.log(`Result is: ${value}`);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
