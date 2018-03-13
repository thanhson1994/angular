import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhsonComponent } from './thanhson.component';

describe('ThanhsonComponent', () => {
  let component: ThanhsonComponent;
  let fixture: ComponentFixture<ThanhsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThanhsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanhsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
