import { Component } from '@angular/core';
import { AsyncSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss'],
})
export class AsyncSubjectComponent {
  subscripiton1!: Subscription;
  subscripiton2!: Subscription;
  ngOnInit(): void {
    const asyncSubject$ = new AsyncSubject();
    asyncSubject$.next(1);
    this.subscripiton1 = asyncSubject$.subscribe((value) => {
      console.log(`observer 1: ${value}`);
    });

    asyncSubject$.next(2);
    asyncSubject$.next(3);
    asyncSubject$.next(4);
    // asyncSubject$.error('error Occeurred Async Subject');
    asyncSubject$.complete();

    setTimeout(() => {
      this.subscripiton2 = asyncSubject$.subscribe((data) => {
        console.log(`observer 2: ${data}`);
      });
      // asyncSubject$.next(5);
      // asyncSubject$.complete();
    }, 3000);
  }

  ngOnDestroy(): void {
    this.subscripiton1 && this.subscripiton1.unsubscribe();
    this.subscripiton2 && this.subscripiton2.unsubscribe();
  }
}
