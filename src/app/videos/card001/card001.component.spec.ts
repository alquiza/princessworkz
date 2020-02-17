import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card001Component } from './card001.component';

describe('Card001Component', () => {
  let component: Card001Component;
  let fixture: ComponentFixture<Card001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
