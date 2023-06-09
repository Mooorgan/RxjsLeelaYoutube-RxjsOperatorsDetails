import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsBasicComponent } from './operators-basic.component';

describe('OperatorsBasicComponent', () => {
  let component: OperatorsBasicComponent;
  let fixture: ComponentFixture<OperatorsBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
