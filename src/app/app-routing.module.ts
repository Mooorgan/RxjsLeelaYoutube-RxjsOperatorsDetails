import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperatorsComponent } from './components/operators/operators.component';
import { BufferOperatorComponent } from './components/operators/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './components/operators/buffer-count-operator/buffer-count-operator.component';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
