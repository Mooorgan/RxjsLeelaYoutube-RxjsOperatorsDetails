import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, delay, of, retry, tap, timer } from 'rxjs';

@Component({
  selector: 'app-retry-with-retry-config',
  templateUrl: './retry-with-retry-config.component.html',
  styleUrls: ['./retry-with-retry-config.component.scss'],
})
export class RetryWithRetryConfigComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  ngOnInit(): void {
    const usersData$ = {
      responseStatus: '500',
      users: [
        { id: 1, name: 'Leela' },
        { id: 2, name: 'Leela2' },
      ],
    };

    of(...usersData$.users)
      .pipe(
        tap((user) => {
          // console.log(user);
          if (!usersData$.responseStatus.startsWith('2')) {
            throw usersData$.responseStatus;
          }
        }),
        retry({
          delay: (err: string, retryCount) => {
            if (!err.startsWith('5')) {
              throw 'error as responseStatus does not start with 5';
            }
            console.log('retrying...');

            console.log(err);
            return timer(1000);
          },
        })
      )
      .subscribe({
        next: console.log,
        error: (err) => {
          console.log(`Error iss ${err}`);
        },
        complete() {
          console.log('Completed');
        },
      });

    setTimeout(() => {
      if (Math.random() < 0.5) {
        usersData$.responseStatus = '200';
      } else {
        usersData$.responseStatus = '400';
      }
    }, 2000);
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
