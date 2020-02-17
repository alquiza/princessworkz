import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card003Component } from './card003.component';

describe('Card003Component', () => {
  let component: Card003Component;
  let fixture: ComponentFixture<Card003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
