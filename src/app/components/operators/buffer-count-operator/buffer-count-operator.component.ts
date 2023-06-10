import { Component, OnInit } from '@angular/core';
import { bufferCount, interval, of } from 'rxjs';

@Component({
  selector: 'app-buffer-count-operator',
  templateUrl: './buffer-count-operator.component.html',
  styleUrls: ['./buffer-count-operator.component.scss'],
})
export class BufferCountOperatorComponent implements OnInit {
  ngOnInit(): void {
    // of(1, 2, 3, 4)
    interval(1000)
      .pipe(bufferCount(3, 1))
      .subscribe((data: number[]) => {
        console.log(data);
      });
  }
}
