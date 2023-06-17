import { Component } from '@angular/core';
import {
  CompleteNotification,
  ErrorNotification,
  NextNotification,
  ObservableNotification,
  Subscription,
  dematerialize,
  materialize,
  of,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-dematerialize-operator',
  templateUrl: './dematerialize-operator.component.html',
  styleUrls: ['./dematerialize-operator.component.scss'],
})
export class DematerializeOperatorComponent {
  subscription!: Subscription;

  ngOnInit(): void {
    const observableNotification: ObservableNotification<number>[] = [];
    for (let i = 0; i < 10; i++) {
      observableNotification.push({
        kind: 'N',
        value: i,
      });
    }
    const errorObsNotification: ErrorNotification = {
      kind: 'E',
      error: new Error('error is bad!!!'),
    };
    const anotherObsNotification: NextNotification<number> = {
      kind: 'N',
      value: 100,
    };
    const completeObsNotification: CompleteNotification = {
      kind: 'C',
    };

    this.subscription = of(
      ...observableNotification,
      // errorObsNotification
      completeObsNotification,
      anotherObsNotification
    )
      .pipe(dematerialize())
      .subscribe({
        next: (value) => {
          console.log(value);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('Complete');
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
