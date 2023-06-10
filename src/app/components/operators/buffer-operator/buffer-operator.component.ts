import { AfterViewInit, Component } from '@angular/core';
import { Observable, buffer, fromEvent, interval, of, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-operator',
  templateUrl: './buffer-operator.component.html',
  styleUrls: ['./buffer-operator.component.scss'],
})
export class BufferOperatorComponent implements AfterViewInit {
  // export class BufferOperatorComponent {
  // clickObservable$!: Observable<number>;
  // clickObservable$!: Observable<number>;
  clickObservable$!: Observable<Event>;
  intervalData: number[] = [];

  startInterval() {
    interval(1000)
      .pipe(
        tap((data) => console.log(data)),
        buffer(this.clickObservable$)
      )
      // .subscribe((data: number[]) => {
      .subscribe((data: number[]) => {
        // console.log(data);
        // if (typeof data === 'number' && Array.isArray(data)) {
        //   this.intervalData.push(...data);
        // }

        // this.intervalData.push(...data);
        this.intervalData.push(...data);
        console.log(data);

        // else if (typeof data === 'number') {
        //   this.intervalData.push(data);
        // }
      });
  }

  // showData() {
  //   this.clickObservable$ = new Observable((observer) => {
  //     observer.next(1);
  //     // observer.complete();
  //   });

  //   // this.clickObservable$ = of(1);
  // }

  ngAfterViewInit(): void {
    this.clickObservable$ = fromEvent(
      document.getElementById('showButton')!,
      'click'
    );
  }
}
