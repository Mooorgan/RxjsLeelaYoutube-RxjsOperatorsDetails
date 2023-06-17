import { Component } from '@angular/core';
import { Subscription, of, scan } from 'rxjs';

@Component({
  selector: 'app-scan-operator',
  templateUrl: './scan-operator.component.html',
  styleUrls: ['./scan-operator.component.scss'],
})
export class ScanOperatorComponent {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    this.subscription = source$
      .pipe(
        scan((acc, curr) => {
          // console.log(`Accumulator: ${acc}`);
          // console.log(`value: ${curr}`);
          return acc + curr;
        }, 2)
        // reduce((acc, curr) => {
        //   console.log(`Accumulator: ${acc}`);
        //   console.log(`value: ${curr}`);
        //   return acc + curr;
        // })
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
