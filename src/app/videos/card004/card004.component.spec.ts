import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card004Component } from './card004.component';

describe('Card004Component', () => {
  let component: Card004Component;
  let fixture: ComponentFixture<Card004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
