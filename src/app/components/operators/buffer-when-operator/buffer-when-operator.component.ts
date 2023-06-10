import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, bufferWhen, interval, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-when-operator',
  templateUrl: './buffer-when-operator.component.html',
  styleUrls: ['./buffer-when-operator.component.scss'],
})
export class BufferWhenOperatorComponent implements OnInit, OnDestroy {
  bufferWhenSubscripiton!: Subscription;
  ngOnInit(): void {
    let x = 0;
    this.bufferWhenSubscripiton = interval(500)
      .pipe(
        tap((i) => {
          x = i;
        }),
        bufferWhen(() => {
          if (x > 18) {
            return interval(1000);
          }
          return interval(3000);
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.bufferWhenSubscripiton.unsubscribe();
  }
}
