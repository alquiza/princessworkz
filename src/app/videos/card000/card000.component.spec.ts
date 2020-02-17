import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card000Component } from './card000.component';

describe('Card000Component', () => {
  let component: Card000Component;
  let fixture: ComponentFixture<Card000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
