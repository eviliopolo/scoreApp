import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminoscondicionesPage } from './terminoscondiciones.page';

describe('TerminoscondicionesPage', () => {
  let component: TerminoscondicionesPage;
  let fixture: ComponentFixture<TerminoscondicionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminoscondicionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminoscondicionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
