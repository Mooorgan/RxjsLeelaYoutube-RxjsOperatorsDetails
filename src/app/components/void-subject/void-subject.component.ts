import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-void-subject',
  templateUrl: './void-subject.component.html',
  styleUrls: ['./void-subject.component.scss'],
})
export class VoidSubjectComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;

  ngOnInit(): void {
    const subject$ = new Subject<void>();

    this.subscription1 = subject$.subscribe((value) => {
      console.log(value);
    });

    // subject$.next(1)
    // subject$.next(2)
    // subject$.next('abcd')
    subject$.next();
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }
}
