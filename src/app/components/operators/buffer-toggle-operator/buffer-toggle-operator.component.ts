import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, bufferToggle, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-toggle-operator',
  templateUrl: './buffer-toggle-operator.component.html',
  styleUrls: ['./buffer-toggle-operator.component.scss'],
})
export class BufferToggleOperatorComponent implements OnInit, OnDestroy {
  toggle!: Subscription;

  ngOnInit(): void {
    const opening = interval(6000).pipe(tap(() => console.log('open')));
    const closing = () => interval(3000).pipe(tap(() => console.log('close')));

    this.toggle = interval(1000)
      .pipe(
        tap((data) => console.log(data)),
        bufferToggle(opening, closing),
        take(3)
      )
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {
    this.toggle.unsubscribe();
  }
}
