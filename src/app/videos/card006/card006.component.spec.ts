import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card006Component } from './card006.component';

describe('Card006Component', () => {
  let component: Card006Component;
  let fixture: ComponentFixture<Card006Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card006Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
