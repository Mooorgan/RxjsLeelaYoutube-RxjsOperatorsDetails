import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, elementAt, of } from 'rxjs';

@Component({
  selector: 'app-element-at',
  templateUrl: './element-at.component.html',
  styleUrls: ['./element-at.component.scss'],
})
export class ElementAtComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    this.subscription = of(1, 2, 3, 4, 5)
      .pipe(elementAt(6, 10))
      .subscribe((value) => console.log(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
