import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, sample } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss'],
})
export class SampleComponent implements OnInit, OnDestroy {
  sampleSubscripiton!: Subscription;
  ngOnInit(): void {
    this.sampleSubscripiton = interval(500)
      .pipe(sample(interval(1000)))
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.sampleSubscripiton.unsubscribe();
  }
}
