import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card002Component } from './card002.component';

describe('Card002Component', () => {
  let component: Card002Component;
  let fixture: ComponentFixture<Card002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
