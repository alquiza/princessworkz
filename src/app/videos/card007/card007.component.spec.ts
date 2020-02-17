import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card007Component } from './card007.component';

describe('Card007Component', () => {
  let component: Card007Component;
  let fixture: ComponentFixture<Card007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
