import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, asyncScheduler, generate } from 'rxjs';
import { GenerateOptions } from 'rxjs/internal/observable/generate';

@Component({
  selector: 'app-generate-function',
  templateUrl: './generate-function.component.html',
  styleUrls: ['./generate-function.component.scss'],
})
export class GenerateFunctionComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  ngOnInit(): void {
    console.log('Start Scripting');
    const generateComponent: GenerateOptions<string, number> = {
      initialState: 0,
      condition: (x) => x < 3,
      iterate: (x) => x + 1,
      resultSelector: (x) => 'Heyy ' + x,
      scheduler: asyncScheduler,
    };
    const source$ = generate(generateComponent);
    this.subscription = source$.subscribe(console.log);
    console.log('End Scripting');
  }

  ngOnDestroy(): void {
    this.subscription && this.subscription.unsubscribe();
  }
}
