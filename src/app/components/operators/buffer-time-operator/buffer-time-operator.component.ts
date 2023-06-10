import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription, bufferTime, interval } from 'rxjs';

@Component({
  selector: 'app-buffer-time-operator',
  templateUrl: './buffer-time-operator.component.html',
  styleUrls: ['./buffer-time-operator.component.scss'],
})
export class BufferTimeOperatorComponent implements OnInit, OnDestroy {
  bufferTimeSubscrpition!: Subscription;
  ngOnInit(): void {
    this.bufferTimeSubscrpition = interval(1000)
      .pipe(bufferTime(1000, 3000))
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.bufferTimeSubscrpition.unsubscribe();
  }
}
