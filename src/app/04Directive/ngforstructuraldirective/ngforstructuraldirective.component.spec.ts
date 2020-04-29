import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforstructuraldirectiveComponent } from './ngforstructuraldirective.component';

describe('NgforstructuraldirectiveComponent', () => {
  let component: NgforstructuraldirectiveComponent;
  let fixture: ComponentFixture<NgforstructuraldirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforstructuraldirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforstructuraldirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
