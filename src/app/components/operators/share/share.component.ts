import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, share } from 'rxjs';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit, OnDestroy {
  subscripiton1!: Subscription;
  subscripiton2!: Subscription;

  ngOnInit(): void {
    const source$ = interval(1000).pipe(share());
    this.subscripiton1 = source$.subscribe((data) => {
      console.log(`Subscription1: ${data}`);
    });

    setTimeout(() => {
      this.subscripiton2 = source$.subscribe((data) => {
        console.log(`Subscription2: ${data}`);
      });
    }, 2000);
  }

  ngOnDestroy(): void {
    this.subscripiton1 && this.subscripiton1.unsubscribe();
    this.subscripiton2 && this.subscripiton2.unsubscribe();
  }
}
