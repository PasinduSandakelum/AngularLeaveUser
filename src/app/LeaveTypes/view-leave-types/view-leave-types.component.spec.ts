import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveTypesComponent } from './view-leave-types.component';

describe('ViewLeaveTypesComponent', () => {
  let component: ViewLeaveTypesComponent;
  let fixture: ComponentFixture<ViewLeaveTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLeaveTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeaveTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
