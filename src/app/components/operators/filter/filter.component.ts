import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, fromEvent, of, tap } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  eventSubscription!: Subscription;
  numbersSubscription!: Subscription;
  ngOnInit(): void {
    this.numbersSubscription = of(1, 2, 3, 4, 5, 1, 2, 3, 7, 1, 2, 10)
      .pipe(filter((value) => value >= 3))
      .subscribe((data) => {
        console.log(data);
      });

    this.eventSubscription = fromEvent(document, 'click')
      .pipe(
        // tap((event: Event) => {
        //   console.log((event.target as HTMLElement).tagName);
        // }),
        filter((event: Event) => {
          return (event.target as HTMLElement).tagName == 'SPAN';
        })
      )
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.eventSubscription.unsubscribe();
    this.numbersSubscription.unsubscribe();
  }
}
