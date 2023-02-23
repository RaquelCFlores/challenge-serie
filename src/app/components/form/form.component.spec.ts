import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('resultSerie', () => {
    const event = 80;
    const spy = jest.spyOn(component, 'resultSerie');
    component.resultSerie(event);
    expect(spy).toHaveBeenCalledWith(event);
    expect(component.resultTotal).toBe(event);
  });

  it('calculate', () => {
    const spy = jest.spyOn(component, 'calculate');
    component.calculate();
    expect(spy).toHaveBeenCalled();
  });
});
