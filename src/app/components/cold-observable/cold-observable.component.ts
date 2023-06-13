import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrls: ['./cold-observable.component.scss'],
})
export class ColdObservableComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  subscription4!: Subscription;
  subscription5!: Subscription;
  subscription6!: Subscription;
  subscription7!: Subscription;
  ngOnInit(): void {
    const number = Math.random();
    let observable$ = new Observable((observer) => {
      // observer.next(Math.random());
      observer.next(number);
    });

    this.subscription1 = observable$.subscribe((value) => {
      console.log(`observer 1: ${value}`);
    });

    this.subscription2 = observable$.subscribe((value) => {
      console.log(`observer 2: ${value}`);
    });

    const documentEvent$ = fromEvent(document, 'click');

    this.subscription3 = documentEvent$.subscribe((data: Event) => {
      console.log((data as PointerEvent).clientX);
    });

    this.subscription4 = documentEvent$.subscribe((data: Event) => {
      console.log((data as PointerEvent).clientX);
    });

    const interval$ = interval(1000);
    const subject$ = new Subject();

    this.subscription5 = interval$.subscribe(subject$);

    // interval$.subscribe((data) => {
    //   console.log(`Observer 1: ${data}`);
    // });

    // setTimeout(() => {
    //   interval$.subscribe((data) => {
    //     console.log(`Observer 2 : ${data}`);
    //   });
    // }, 2000);

    this.subscription6 = subject$.subscribe((data) => {
      console.log(`Observer 1: ${data}`);
    });

    setTimeout(() => {
      this.subscription7 = subject$.subscribe((data) => {
        console.log(`Observer 2 : ${data}`);
      });
    }, 2000);
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
    this.subscription3 && this.subscription3.unsubscribe();
    this.subscription4 && this.subscription4.unsubscribe();
    this.subscription5 && this.subscription5.unsubscribe();
    this.subscription6 && this.subscription6.unsubscribe();
    this.subscription7 && this.subscription7.unsubscribe();
  }
}
