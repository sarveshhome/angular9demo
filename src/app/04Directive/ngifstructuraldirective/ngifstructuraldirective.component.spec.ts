import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifstructuraldirectiveComponent } from './ngifstructuraldirective.component';

describe('NgifstructuraldirectiveComponent', () => {
  let component: NgifstructuraldirectiveComponent;
  let fixture: ComponentFixture<NgifstructuraldirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifstructuraldirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifstructuraldirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
