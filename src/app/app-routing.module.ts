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

const routes: Routes = [
  {
    path: '',
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
