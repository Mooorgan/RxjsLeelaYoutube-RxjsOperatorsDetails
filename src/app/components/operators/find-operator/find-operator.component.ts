import { Component } from '@angular/core';
import { Subscription, find, first, of } from 'rxjs';

@Component({
  selector: 'app-find-operator',
  templateUrl: './find-operator.component.html',
  styleUrls: ['./find-operator.component.scss'],
})
export class FindOperatorComponent {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = of(1, 20, 3, 4, 15, 6, 7, 10, 9);
    this.subscription = source$
      .pipe(
        find((val) => {
          // return val % 5 === 0;
          return val > 100; //Returns undefined as not Found;
        })
        // first((val) => {
        //   return val % 5 === 0;
        //   // return val > 100; //Returns error as not Found;
        // })
      )
      .subscribe({
        next: (value) => {
          console.log(`Result is: ${value}`);
        },
        error: (err) => {
          console.log(`Error isss: ${err}`);
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
