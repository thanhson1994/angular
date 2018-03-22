import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResisterFormComponent } from './resister-form.component';

describe('ResisterFormComponent', () => {
  let component: ResisterFormComponent;
  let fixture: ComponentFixture<ResisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
