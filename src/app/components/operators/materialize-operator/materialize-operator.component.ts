import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, materialize, of, tap } from 'rxjs';

@Component({
  selector: 'app-materialize-operator',
  templateUrl: './materialize-operator.component.html',
  styleUrls: ['./materialize-operator.component.scss'],
})
export class MaterializeOperatorComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const source$ = of(1, 2, 3, 4, 5);
    this.subscription = source$
      .pipe(
        tap((val) => {
          if (val > 3) throw 'Value greater than 3';
        }),
        materialize()
      )
      .subscribe({
        next: (value) => {
          console.log(value);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
