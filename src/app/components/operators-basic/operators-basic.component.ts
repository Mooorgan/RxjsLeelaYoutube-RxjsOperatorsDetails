import { Component, OnInit } from '@angular/core';
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-operators-basic',
  templateUrl: './operators-basic.component.html',
  styleUrls: ['./operators-basic.component.scss'],
})
export class OperatorsBasicComponent implements OnInit {
  ngOnInit() {
    const newObservable = interval(1000);

    newObservable
      .pipe(
        filter((number) => {
          return number % 2 === 0;
        }),
        map((number) => {
          return `even number: ${number}`;
        })
      )
      .subscribe((number) => {
        console.log(number);
      });
  }
}
