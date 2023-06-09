import { Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import {
  funcObservable,
  functionObs,
} from './miscellanous/FunctionVsObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'final-AngularRxjs';

  postsArray = [
    { title: 'Leela1', description: 'Leela description1' },
    { title: 'Leela2', description: 'Leela descripiton2' },
    { title: 'Leela3', description: 'Leela descripiton3' },
  ];

  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolve the promise, sending data');
    }, 3000);
  });

  promiseObservable$ = from(this.promise);

  postsArrayObservable$ = from(this.postsArray);

  constructor() {
    // this.postsArrayObservable$.subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('complete done(array observable)'),
    // });
    // this.promiseObservable$.subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('complete done(promise observable)'),
    // });
    // console.log('before function call');
    // console.log(functionObs());
    // console.log('after function call');
    // console.log('before observable call');
    // funcObservable.subscribe((value) => {
    //   console.log(value);
    // });
    // console.log('after observable call');
  }

  ngAfterViewInit() {
    // fromEvent(document.getElementById('click-button')!, 'click').subscribe({
    //   next: (data) => console.log(data),
    //   error: (error) => console.log(error),
    //   complete: () => console.log('complete done!(button observable)'),
    // });
  }
}
