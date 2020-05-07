import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmulatedmodeComponent } from './emulatedmode.component';

describe('EmulatedmodeComponent', () => {
  let component: EmulatedmodeComponent;
  let fixture: ComponentFixture<EmulatedmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmulatedmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmulatedmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
