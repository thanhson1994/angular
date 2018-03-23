import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OustandingComponent } from './oustanding.component';

describe('OustandingComponent', () => {
  let component: OustandingComponent;
  let fixture: ComponentFixture<OustandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OustandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OustandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
