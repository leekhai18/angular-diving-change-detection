/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lv3Component } from './lv3.component';

describe('Lv3Component', () => {
  let component: Lv3Component;
  let fixture: ComponentFixture<Lv3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lv3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
