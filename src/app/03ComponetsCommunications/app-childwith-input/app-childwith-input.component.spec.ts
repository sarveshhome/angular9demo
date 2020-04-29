import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChildwithInputComponent } from './app-childwith-input.component';

describe('AppChildwithInputComponent', () => {
  let component: AppChildwithInputComponent;
  let fixture: ComponentFixture<AppChildwithInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChildwithInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChildwithInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
