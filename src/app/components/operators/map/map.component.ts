import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, filter, fromEvent, map, of } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy, AfterViewInit {
  subscription1!: Subscription;
  subscription2!: Subscription;
  subscription3!: Subscription;
  ngOnInit(): void {
    // this.subscription1 = of(1, 2, 3, 4)
    //   .pipe(
    //     map((value) => {
    //       return value * 10;
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    // this.subscription2 = of(1, 2, 3, 4)
    //   .pipe(
    //     filter((value) => {
    //       return value % 2 === 0;
    //     }),
    //     map((value) => {
    //       return value * 10;
    //     })
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

  ngAfterViewInit(): void {
    const mapButtonEvent = fromEvent(
      document.getElementById('map-button')!,
      'click'
    );
    this.subscription3 = mapButtonEvent
      .pipe(
        map((event: Event) => {
          return {
            x: (event as PointerEvent).clientX,
            y: (event as PointerEvent).clientY,
          };
        })
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  ngOnDestroy(): void {
    this.subscription1 && this.subscription1.unsubscribe();
    this.subscription2 && this.subscription2.unsubscribe();
    this.subscription3 && this.subscription3.unsubscribe();
  }
}
