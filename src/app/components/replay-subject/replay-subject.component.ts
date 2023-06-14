import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss'],
})
export class ReplaySubjectComponent implements OnInit, OnDestroy {
  subscripiton1!: Subscription;
  subscripiton2!: Subscription;
  ngOnInit(): void {
    const replaySubject$ = new ReplaySubject(2, 2000);
    replaySubject$.next(1);
    this.subscripiton1 = replaySubject$.subscribe((value) => {
      console.log(`observer 1: ${value}`);
    });

    replaySubject$.next(2);
    replaySubject$.next(3);
    replaySubject$.next(4);
    // replaySubject$.error('error Occeurred Replay Subject');

    setTimeout(() => {
      this.subscripiton2 = replaySubject$.subscribe((data) => {
        console.log(`observer 2: ${data}`);
      });
      replaySubject$.next(5);
    }, 3000);
  }

  ngOnDestroy(): void {
    this.subscripiton1 && this.subscripiton1.unsubscribe();
    this.subscripiton2 && this.subscripiton2.unsubscribe();
  }
}
