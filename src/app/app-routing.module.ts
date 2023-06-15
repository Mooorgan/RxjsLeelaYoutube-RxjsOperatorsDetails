import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './components/operators/operators.component';
import { BufferOperatorComponent } from './components/operators/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './components/operators/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './components/operators/buffer-time-operator/buffer-time-operator.component';
import { BufferToggleOperatorComponent } from './components/operators/buffer-toggle-operator/buffer-toggle-operator.component';
import { BufferWhenOperatorComponent } from './components/operators/buffer-when-operator/buffer-when-operator.component';
import { TakeOperatorComponent } from './components/operators/take-operator/take-operator.component';
import { TakeLastOperatorComponent } from './components/operators/take-last-operator/take-last-operator.component';
import { TakeUntilComponent } from './components/operators/take-until/take-until.component';
import { TakeWhileComponent } from './components/operators/take-while/take-while.component';
import { SkipComponent } from './components/operators/skip/skip.component';
import { SkipLastComponent } from './components/operators/skip-last/skip-last.component';
import { SkipUntilComponent } from './components/operators/skip-until/skip-until.component';
import { SkipWhileComponent } from './components/operators/skip-while/skip-while.component';
import { DistinctComponent } from './components/operators/distinct/distinct.component';
import { DistinctUntilChangedComponent } from './components/operators/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './components/operators/distinct-until-key-changed/distinct-until-key-changed.component';
import { FilterComponent } from './components/operators/filter/filter.component';
import { SampleComponent } from './components/operators/sample/sample.component';
import { AuditComponent } from './components/operators/audit/audit.component';
import { ThrottleComponent } from './components/operators/throttle/throttle.component';
import { FirstComponent } from './components/operators/first/first.component';
import { LastComponent } from './components/operators/last/last.component';
import { DebounceComponent } from './components/operators/debounce/debounce.component';
import { ElementAtComponent } from './components/operators/element-at/element-at.component';
import { IgnoreElementsComponent } from './components/operators/ignore-elements/ignore-elements.component';
import { SingleComponent } from './components/operators/single/single.component';
import { MapComponent } from './components/operators/map/map.component';
import { AjaxComponent } from './components/operators/ajax/ajax.component';
import { MergeMapComponent } from './components/operators/merge-map/merge-map.component';
import { ConcatMapComponent } from './components/operators/concat-map/concat-map.component';
import { ExhaustMapComponent } from './components/operators/exhaust-map/exhaust-map.component';
import { SwitchMapComponent } from './components/operators/switch-map/switch-map.component';
import { SubjectComponent } from './components/subject/subject.component';
import { ColdObservableComponent } from './components/cold-observable/cold-observable.component';
import { ConnectableComponent } from './components/connectable/connectable.component';
import { ShareComponent } from './components/operators/share/share.component';
import { BehaviorSubjectComponent } from './components/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './components/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './components/async-subject/async-subject.component';
import { VoidSubjectComponent } from './components/void-subject/void-subject.component';
import { ConnectableBehaviorComponent } from './components/operators/connectable-behavior/connectable-behavior.component';
import { ConnectableAsyncComponent } from './components/operators/connectable-async/connectable-async.component';
import { ConnectableReplayComponent } from './components/operators/connectable-replay/connectable-replay.component';
import { CatchErrorComponent } from './components/operators/catch-error/catch-error.component';
import { RetryComponent } from './components/operators/retry/retry.component';
import { RetryWithRetryConfigComponent } from './components/operators/retry-with-retry-config/retry-with-retry-config.component';
import { CombineLatestFunctionComponent } from './components/operators/combine-latest-function/combine-latest-function.component';
import { ConcatFunctionComponent } from './components/operators/concat-function/concat-function.component';
import { ForkJoinFunctionComponent } from './components/operators/fork-join-function/fork-join-function.component';
import { MergeFunctionComponent } from './components/operators/merge-function/merge-function.component';

const routes: Routes = [
  {
    path: 'operators',
    component: OperatorsComponent,
    children: [
      {
        path: 'buffer',
        component: BufferOperatorComponent,
      },
      {
        path: 'bufferCount',
        component: BufferCountOperatorComponent,
      },
      {
        path: 'bufferTime',
        component: BufferTimeOperatorComponent,
      },
      {
        path: 'bufferToggle',
        component: BufferToggleOperatorComponent,
      },
      {
        path: 'bufferWhen',
        component: BufferWhenOperatorComponent,
      },
      {
        path: 'take',
        component: TakeOperatorComponent,
      },
      {
        path: 'takeLast',
        component: TakeLastOperatorComponent,
      },
      {
        path: 'takeUntil',
        component: TakeUntilComponent,
      },
      {
        path: 'takeWhile',
        component: TakeWhileComponent,
      },
      {
        path: 'skip',
        component: SkipComponent,
      },
      {
        path: 'skipLast',
        component: SkipLastComponent,
      },
      {
        path: 'skipUntil',
        component: SkipUntilComponent,
      },
      {
        path: 'skipWhile',
        component: SkipWhileComponent,
      },
      {
        path: 'distinct',
        component: DistinctComponent,
      },
      {
        path: 'distinctUntilChanged',
        component: DistinctUntilChangedComponent,
      },
      {
        path: 'distinct',
        component: DistinctComponent,
      },
      {
        path: 'distinctUntilKeyChanged',
        component: DistinctUntilKeyChangedComponent,
      },
      {
        path: 'filter',
        component: FilterComponent,
      },
      {
        path: 'sample',
        component: SampleComponent,
      },
      {
        path: 'audit',
        component: AuditComponent,
      },
      {
        path: 'throttle',
        component: ThrottleComponent,
      },
      {
        path: 'first',
        component: FirstComponent,
      },
      {
        path: 'last',
        component: LastComponent,
      },
      {
        path: 'debounce',
        component: DebounceComponent,
      },
      {
        path: 'elementAt',
        component: ElementAtComponent,
      },
      {
        path: 'ignoreElements',
        component: IgnoreElementsComponent,
      },
      {
        path: 'single',
        component: SingleComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: 'ajax',
        component: AjaxComponent,
      },
      {
        path: 'mergeMap',
        component: MergeMapComponent,
      },
      {
        path: 'concatMap',
        component: ConcatMapComponent,
      },
      {
        path: 'exhaustMap',
        component: ExhaustMapComponent,
      },
      {
        path: 'switchMap',
        component: SwitchMapComponent,
      },
      {
        path: 'share',
        component: ShareComponent,
      },
      {
        path: 'connectable-behavior',
        component: ConnectableBehaviorComponent,
      },
      {
        path: 'connectable-async',
        component: ConnectableAsyncComponent,
      },
      {
        path: 'connectable-replay',
        component: ConnectableReplayComponent,
      },
      {
        path: 'catchError',
        component: CatchErrorComponent,
      },
      {
        path: 'retry',
        component: RetryComponent,
      },
      {
        path: 'retry-withRetryConfig',
        component: RetryWithRetryConfigComponent,
      },
      {
        path: 'combineLatestFunction',
        component: CombineLatestFunctionComponent,
      },
      {
        path: 'concatFunction',
        component: ConcatFunctionComponent,
      },
      {
        path: 'forkJoin',
        component: ForkJoinFunctionComponent,
      },
      {
        path: 'merge',
        component: MergeFunctionComponent,
      },
    ],
  },
  {
    path: 'subject',
    component: SubjectComponent,
  },
  {
    path: 'coldObservable',
    component: ColdObservableComponent,
  },
  {
    path: 'connectable',
    component: ConnectableComponent,
  },
  {
    path: 'behaviorSubject',
    component: BehaviorSubjectComponent,
  },
  {
    path: 'replaySubject',
    component: ReplaySubjectComponent,
  },
  {
    path: 'asyncSubject',
    component: AsyncSubjectComponent,
  },
  {
    path: 'voidSubject',
    component: VoidSubjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
