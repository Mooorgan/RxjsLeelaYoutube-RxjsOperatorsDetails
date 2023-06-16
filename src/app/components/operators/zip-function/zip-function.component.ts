import { Component } from '@angular/core';
import { Observable, Subscription, interval, of, tap, zip } from 'rxjs';

@Component({
  selector: 'app-zip-function',
  templateUrl: './zip-function.component.html',
  styleUrls: ['./zip-function.component.scss'],
})
export class ZipFunctionComponent {
  subscription!: Subscription;

  ngOnInit(): void {
    const source1$ = of(1, 2, 3, 4, 5, 6);
    const source2$ = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      // observer.error('error in custom Observable');
      // observer.complete();
      observer.next(3);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
      observer.next(5);
      observer.next(6);
    });

    const source3$ = of(1, 2, 3, 4, 5, 6);
    // this.subscription = zip(source1$, source2$, source3$).subscribe({
    this.subscription = zip([source1$, source2$, source3$], (a, b, c) => {
      return `${a},${b},${c}`;
    }).subscribe({
      next: console.log,
      error: (err) => {
        console.log(`Error is ${err}`);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
