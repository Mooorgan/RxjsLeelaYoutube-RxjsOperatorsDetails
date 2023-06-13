import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, connectable, interval } from 'rxjs';

@Component({
  selector: 'app-connectable',
  templateUrl: './connectable.component.html',
  styleUrls: ['./connectable.component.scss'],
})
export class ConnectableComponent implements OnInit, OnDestroy {
  subscription1!: Subscription;
  subscription2!: Subscription;

  ngOnInit(): void {
    const source = connectable(interval(1000));
    // source.connect();

    this.subscription1 = source.subscribe((data) => {
      console.log(data);
    });

    setTimeout(() => {
      this.subscription2 = source.subscribe((data) => {
        console.log(data);
      });
    }, 3000);

    source.connect();
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
  }
}
