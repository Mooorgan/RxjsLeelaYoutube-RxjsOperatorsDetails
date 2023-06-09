import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ObserverClass } from 'src/app/observerClass/observerClass';

@Component({
  selector: 'app-create-new-observable',
  templateUrl: './create-new-observable.component.html',
  styleUrls: ['./create-new-observable.component.scss'],
})
export class CreateNewObservableComponent {
  ngOnInit() {
    const newObservable$ = new Observable<number>((observer) => {
      for (let i = 0; i < 5; i++) {
        if (i === 4) {
          observer.error('Error as i is equal to 4');
        }
        observer.next(i);
      }
      observer.next(123);
      observer.complete();
      observer.next(456);
    });

    let observer = {
      next: (data: number) => console.log(data),
      error: (error: string) => console.log(error, '!!!error in observable'),
      complete: () => console.log('completed self created observable'),
    };

    // newObservable$.subscribe(observer);
    // newObservable$.subscribe(
    //   (data: number) => console.log(data, 'shortform')
    //   //This is Deprecated
    //   // (error: string) => console.log(error, '!!!error in observable'),
    //   // () => console.log('completed self created observable')
    // );

    // newObservable$.subscribe(new ObserverClass());
  }
}
