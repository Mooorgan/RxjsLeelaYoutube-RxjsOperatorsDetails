import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss'],
})
export class BehaviorSubjectComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;
  ngOnInit(): void {
    const behaviorSubject$ = new BehaviorSubject(0);

    this.subscription1 = behaviorSubject$.subscribe((data) => {
      console.log(`Observer 1: ${data}`);
    });

    behaviorSubject$.next(1);
    // behaviorSubject$.error('Error occurred in behavior Subject');

    this.subscription2 = behaviorSubject$.subscribe((data) => {
      console.log(`Observer 2: ${data}`);
    });

    behaviorSubject$.next(2);
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }
}
