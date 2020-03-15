import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaydatabindingwithoutngModelComponent } from './twowaydatabindingwithoutng-model.component';

describe('TwowaydatabindingwithoutngModelComponent', () => {
  let component: TwowaydatabindingwithoutngModelComponent;
  let fixture: ComponentFixture<TwowaydatabindingwithoutngModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaydatabindingwithoutngModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaydatabindingwithoutngModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
