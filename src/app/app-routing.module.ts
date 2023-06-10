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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
