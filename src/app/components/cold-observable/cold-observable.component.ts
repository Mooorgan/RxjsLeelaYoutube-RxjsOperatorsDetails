import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.scss'],
})
export class ColdObservableComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    const number = Math.random();
    let observable$ = new Observable((observer) => {
      // observer.next(Math.random());
      observer.next(number);
    });

    observable$.subscribe((value) => {
      console.log(`observer 1: ${value}`);
    });

    observable$.subscribe((value) => {
      console.log(`observer 2: ${value}`);
    });

    const documentEvent$ = fromEvent(document, 'click');

    documentEvent$.subscribe((data: Event) => {
      console.log((data as PointerEvent).clientX);
    });

    documentEvent$.subscribe((data: Event) => {
      console.log((data as PointerEvent).clientX);
    });

    const interval$ = interval(1000);
    const subject$ = new Subject();

    interval$.subscribe(subject$);

    // interval$.subscribe((data) => {
    //   console.log(`Observer 1: ${data}`);
    // });

    // setTimeout(() => {
    //   interval$.subscribe((data) => {
    //     console.log(`Observer 2 : ${data}`);
    //   });
    // }, 2000);

    subject$.subscribe((data) => {
      console.log(`Observer 1: ${data}`);
    });

    setTimeout(() => {
      subject$.subscribe((data) => {
        console.log(`Observer 2 : ${data}`);
      });
    }, 2000);
  }

  ngOnDestroy(): void {}
}
