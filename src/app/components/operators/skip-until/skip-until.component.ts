import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {
  Observable,
  Subscription,
  fromEvent,
  fromEventPattern,
  interval,
  skipUntil,
} from 'rxjs';

@Component({
  selector: 'app-skip-until',
  templateUrl: './skip-until.component.html',
  styleUrls: ['./skip-until.component.scss'],
})
export class SkipUntilComponent implements OnInit, OnDestroy, AfterViewInit {
  buttonEvent!: Observable<Event>;
  skipUntilSubscripiton!: Subscription;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.buttonEvent = fromEvent(
      document.getElementById('show-until')!,
      'click'
    );

    this.skipUntilSubscripiton = interval(500)
      .pipe(skipUntil(this.buttonEvent))
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.skipUntilSubscripiton.unsubscribe();
  }
}
