import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Subscription,
  concatAll,
  from,
  groupBy,
  mergeAll,
  mergeMap,
  of,
  reduce,
  toArray,
} from 'rxjs';

@Component({
  selector: 'app-group-by-operator',
  templateUrl: './group-by-operator.component.html',
  styleUrls: ['./group-by-operator.component.scss'],
})
export class GroupByOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const posts = [
      {
        id: 1,
        likes: 2,
        comments: 4,
      },
      {
        id: 2,
        likes: 5,
        comments: 10,
      },
      {
        id: 1,
        likes: 4,
        comments: 5,
      },
      {
        id: 2,
        likes: 3,
        comments: 7,
      },
    ];

    const source$ =
      // of(1, 2, 3, 4, 5, 6);
      from(posts);
    this.subscription = source$
      .pipe(
        groupBy((val) => {
          // return val % 2
          return val.id;
        }),
        // mergeMap((value) => value.pipe(toArray()))
        mergeMap((value) =>
          value.pipe(
            reduce(
              (acc, curr) => {
                acc.id = curr.id;
                acc.likes = acc.likes + curr.likes;
                acc.comments = acc.comments + curr.comments;
                return acc;
              },
              { id: 0, likes: 0, comments: 0 }
            )
          )
        )
        // mergeAll()
        // concatAll()
      )
      .subscribe({
        next(value) {
          console.log(value);
        },
        error(err) {
          console.log(`Error isss ${err}`);
        },
        complete() {
          console.log(' Completed');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
