import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, concatMap, from, of, partition, toArray } from 'rxjs';

@Component({
  selector: 'app-partition-function',
  templateUrl: './partition-function.component.html',
  styleUrls: ['./partition-function.component.scss'],
})
export class PartitionFunctionComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9);

    const data = partition(source$, (value) => value % 2 === 0);

    // this.subscription1 = data[0].subscribe(console.log);
    // this.subscription2 = data[1].subscribe(console.log);

    this.subscription3 = from(data)
      .pipe(concatMap((value) => value.pipe(toArray())))
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
    this.subscription3 && this.subscription3.unsubscribe();
  }
}
