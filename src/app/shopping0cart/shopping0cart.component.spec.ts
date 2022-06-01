import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shopping0cartComponent } from './shopping0cart.component';

describe('Shopping0cartComponent', () => {
  let component: Shopping0cartComponent;
  let fixture: ComponentFixture<Shopping0cartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shopping0cartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shopping0cartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
