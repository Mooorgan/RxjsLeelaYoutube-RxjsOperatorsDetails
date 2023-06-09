import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribingAnObservableComponent } from './unsubscribing-an-observable.component';

describe('UnsubscribingAnObservableComponent', () => {
  let component: UnsubscribingAnObservableComponent;
  let fixture: ComponentFixture<UnsubscribingAnObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribingAnObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnsubscribingAnObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
