import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribing-an-observable',
  templateUrl: './unsubscribing-an-observable.component.html',
  styleUrls: ['./unsubscribing-an-observable.component.scss'],
})
export class UnsubscribingAnObservableComponent {
  // subscription!: Subscription;
  // ngOnInit(): void {
  //   const newObservable$ = interval(1000);
  //   this.subscription = newObservable$.subscribe((data) => {
  //     console.log(new Date().toLocaleTimeString() + ' ' + data);
  //   });
  // }
  // unsubscribeObservable() {
  //   console.log('unsubscribe from the subscription');
  //   this.subscription.unsubscribe();
  // }
  // timerConsoleSubscription!: Subscription;
  // timerConsoleSubscription1!: Subscription;
  // timerBrowserSubscription!: Subscription;
  // timers: number[] = [];
  // // aaa!: Subscription;
  // aaa1: Subscription = new Subscription();
  // ngOnInit(): void {
  //   const newObservable$ = new Observable<number>((observer) => {
  //     let i = 0;
  //     const interval = setInterval(() => {
  //       console.log('Interval executing');
  //       observer.next(i++);
  //       // observer.next(++i);
  //       // if (i === 5) {
  //       //   observer.error('super error');
  //       // }
  //       // if (i === 5) {
  //       //   observer.complete();
  //       // }
  //     }, 1000);
  //     return () => {
  //       console.log('called when observer is unsubscribed');
  //       clearInterval(interval);
  //     };
  //   });
  //   this.timerConsoleSubscription = newObservable$.subscribe((data) => {
  //     console.log(new Date().toLocaleTimeString() + ' ' + data);
  //   });
  //   this.timerConsoleSubscription1 = newObservable$.subscribe((data) => {
  //     console.log(new Date().toLocaleTimeString() + ' ' + data);
  //   });
  //   this.timerBrowserSubscription = newObservable$.subscribe((data) => {
  //     this.timers.push(data);
  //   });
  //   // this.timerConsoleSubscription.add(this.timerBrowserSubscription);
  //   // this.timerConsoleSubscription.add(this.timerConsoleSubscription1);
  //   this.aaa1.add(this.timerConsoleSubscription);
  //   this.aaa1.add(this.timerConsoleSubscription1);
  //   this.aaa1.add(this.timerBrowserSubscription);
  // }
  // unsubscribeObservableButton() {
  //   console.log('unsubscribe from the subscription');
  //   // this.timerConsoleSubscription.unsubscribe();
  //   // this.timerBrowserSubscription.unsubscribe();
  //   // this.timerConsoleSubscription.unsubscribe();
  //   this.aaa1.unsubscribe();
  // }
}
