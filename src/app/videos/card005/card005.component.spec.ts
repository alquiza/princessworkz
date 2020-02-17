import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card005Component } from './card005.component';

describe('Card005Component', () => {
  let component: Card005Component;
  let fixture: ComponentFixture<Card005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
