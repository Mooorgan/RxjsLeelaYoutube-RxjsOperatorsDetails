import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, debounce, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss'],
})
export class DebounceComponent
  implements OnInit, OnDestroy, OnDestroy, AfterViewInit
{
  subscription1!: Subscription;
  Buttonsubscription2!: Subscription;
  ngOnInit(): void {
    this.subscription1 = interval(1000)
      .pipe(
        debounce((value) => {
          return interval(value * 100);
        })
      )
      .subscribe((value) => console.log(value));
  }

  ngAfterViewInit(): void {
    const buttonEvent = fromEvent(
      document.getElementById('button-debounce')!,
      'click'
    );

    this.Buttonsubscription2 = buttonEvent
      .pipe(debounce((value) => interval(1000)))
      .subscribe((value) => console.log(value));
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.Buttonsubscription2 && this.Buttonsubscription2.unsubscribe();
  }
}
