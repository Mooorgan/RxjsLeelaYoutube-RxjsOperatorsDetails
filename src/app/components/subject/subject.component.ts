import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss'],
})
export class SubjectComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    this.observable();
    this.subjectAsObservable();
  }

  observable() {
    let observable$ = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    });

    let observer1 = {
      next(value: number) {
        console.log(`Observer1: ${value}`);
      },
      error(err: any) {
        console.log(`Observer1: ${err}`);
      },
      complete() {
        console.log('Observer 1 Completed!!!');
      },
    };
    let observer2 = {
      next(value: number) {
        console.log(`Observer2: ${value}`);
      },
      error(err: any) {
        console.log(`Observer2: ${err}`);
      },
      complete() {
        console.log('Observer 2 Completed!!!');
      },
    };

    observable$.subscribe(observer1);
    observable$.subscribe(observer2);
  }

  subjectAsObservable() {
    const observable$ = of(1, 2, 3, 4, 5);
    const subject = new Subject<number>();

    let observer1 = {
      next(value: number) {
        console.log(`Observer1: ${value}`);
      },
      error(err: any) {
        console.log(`Observer1: ${err}`);
      },
      complete() {
        console.log('Observer 1 Completed!!!');
      },
    };
    let observer2 = {
      next(value: number) {
        console.log(`Observer2: ${value}`);
      },
      error(err: any) {
        console.log(`Observer2: ${err}`);
      },
      complete() {
        console.log('Observer 2 Completed!!!');
      },
    };

    subject.subscribe(observer1);
    subject.subscribe(observer2);

    // observable$.subscribe(subject);
    subject.next(1);
    subject.next(2);
    subject.next(3);
  }

  ngOnDestroy(): void {}
}
