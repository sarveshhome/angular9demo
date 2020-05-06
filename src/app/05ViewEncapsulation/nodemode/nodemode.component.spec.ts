import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodemodeComponent } from './nodemode.component';

describe('NodemodeComponent', () => {
  let component: NodemodeComponent;
  let fixture: ComponentFixture<NodemodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodemodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
