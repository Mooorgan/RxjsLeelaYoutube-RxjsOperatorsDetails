import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subscription,
  concatMap,
  exhaustMap,
  filter,
  interval,
  map,
  of,
  take,
  tap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss'],
})
export class ExhaustMapComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  ngOnInit(): void {
    this.subscription1 =
      // of(1, 2, 3, 4)
      interval(500)
        .pipe(
          filter((id) => id > 0),
          tap((value) => console.log(value)),
          exhaustMap((id) => {
            // console.log(id);
            return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`);
          }),
          map((data) => data.response),
          take(6)
        )
        .subscribe((data) => {
          console.log(data);
        });
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
  }
}
