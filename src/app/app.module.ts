import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewObservableComponent } from './components/create-new-observable/create-new-observable.component';
import { UnsubscribingAnObservableComponent } from './components/unsubscribing-an-observable/unsubscribing-an-observable.component';
import { OperatorsBasicComponent } from './components/operators-basic/operators-basic.component';
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

@NgModule({
  declarations: [
    AppComponent,
    CreateNewObservableComponent,
    UnsubscribingAnObservableComponent,
    OperatorsBasicComponent,
    OperatorsComponent,
    BufferOperatorComponent,
    BufferCountOperatorComponent,
    BufferTimeOperatorComponent,
    BufferToggleOperatorComponent,
    BufferWhenOperatorComponent,
    TakeOperatorComponent,
    TakeLastOperatorComponent,
    TakeUntilComponent,
    TakeWhileComponent,
    SkipComponent,
    SkipLastComponent,
    SkipUntilComponent,
    SkipWhileComponent,
    DistinctComponent,
    DistinctUntilChangedComponent,
    DistinctUntilKeyChangedComponent,
    FilterComponent,
    SampleComponent,
    AuditComponent,
    ThrottleComponent,
    FirstComponent,
    LastComponent,
    DebounceComponent,
    ElementAtComponent,
    IgnoreElementsComponent,
    SingleComponent,
    MapComponent,
    AjaxComponent,
    MergeMapComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    SwitchMapComponent,
    SubjectComponent,
    ColdObservableComponent,
    ConnectableComponent,
    ShareComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    AsyncSubjectComponent,
    VoidSubjectComponent,
    ConnectableBehaviorComponent,
    ConnectableAsyncComponent,
    ConnectableReplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
