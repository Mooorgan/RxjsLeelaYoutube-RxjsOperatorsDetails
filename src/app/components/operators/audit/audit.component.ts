import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, audit, interval } from 'rxjs';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.scss'],
})
export class AuditComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    this.subscription = interval(1000)
      .pipe(
        audit((value) => {
          return interval(2000);
        })
      )
      .subscribe((value) => {
        console.log(value);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
