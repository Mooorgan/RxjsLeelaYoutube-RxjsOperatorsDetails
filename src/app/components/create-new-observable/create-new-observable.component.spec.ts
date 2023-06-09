import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewObservableComponent } from './create-new-observable.component';

describe('CreateNewObservableComponent', () => {
  let component: CreateNewObservableComponent;
  let fixture: ComponentFixture<CreateNewObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
