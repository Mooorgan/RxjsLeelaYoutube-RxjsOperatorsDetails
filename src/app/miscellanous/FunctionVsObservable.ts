import { Observable } from 'rxjs';

export function functionObs() {
  console.log('function call');
  return 1;
}

export const funcObservable = new Observable((observer) => {
  console.log('observable call');
  observer.next(1);
  observer.next(2);
  setTimeout(() => {
    observer.next(3);
  }, 3000);
  observer.next(4);
  // observer.complete();
  observer.next(5);
});
