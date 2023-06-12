import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map, mergeMap, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss'],
})
export class MergeMapComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  ngOnInit(): void {
    this.subscription1 = of(1, 2, 3, 4)
      .pipe(
        mergeMap(
          (id) => {
            console.log(id);
            return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`);
          },
          // undefined,
          1
        ),
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
