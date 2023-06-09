import { Observer } from 'rxjs';

export class ObserverClass implements Observer<number> {
  next(data: number) {
    console.log('ObserverClass' + data);
  }

  error(error: string) {
    console.log(error);
  }

  complete() {
    console.log('class observer class completed');
  }
}
