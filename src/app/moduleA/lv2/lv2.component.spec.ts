/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lv2Component } from './lv2.component';

describe('Lv2Component', () => {
  let component: Lv2Component;
  let fixture: ComponentFixture<Lv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
