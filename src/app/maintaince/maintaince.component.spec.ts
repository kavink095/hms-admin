import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainceComponent } from './maintaince.component';

describe('MaintainceComponent', () => {
  let component: MaintainceComponent;
  let fixture: ComponentFixture<MaintainceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
