import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateNewObservableComponent } from './components/create-new-observable/create-new-observable.component';
import { UnsubscribingAnObservableComponent } from './components/unsubscribing-an-observable/unsubscribing-an-observable.component';
import { OperatorsBasicComponent } from './components/operators-basic/operators-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateNewObservableComponent,
    UnsubscribingAnObservableComponent,
    OperatorsBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
