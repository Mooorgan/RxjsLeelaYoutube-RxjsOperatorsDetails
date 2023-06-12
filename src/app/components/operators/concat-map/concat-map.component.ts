import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, concatMap, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss'],
})
export class ConcatMapComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  ngOnInit(): void {
    this.subscription1 = of(1, 2, 3, 4)
      .pipe(
        concatMap((id) => {
          console.log(id);
          return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`);
        }),
        map((data) => data.response)
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
  }
}
