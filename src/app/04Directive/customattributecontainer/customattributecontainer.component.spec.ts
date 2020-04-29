import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomattributecontainerComponent } from './customattributecontainer.component';

describe('CustomattributecontainerComponent', () => {
  let component: CustomattributecontainerComponent;
  let fixture: ComponentFixture<CustomattributecontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomattributecontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomattributecontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
