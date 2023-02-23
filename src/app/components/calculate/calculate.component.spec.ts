import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateComponent } from './calculate.component';

describe('CalculateComponent', () => {
  let component: CalculateComponent;
  let fixture: ComponentFixture<CalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Casos de prueba de funciones individuales

  it('dobleTriangular(3) should return 12', () => {
    const n = 3;
    expect(component.dobleTriangular(n)).toBe(12);
  });

  it('doblePrimo(3) should return 6', () => {
    const n = 3;
    expect(component.doblePrimo(n)).toBe(6);
  });

  it('fibonacci(4) should return 3', () => {
    const n = 4;
    expect(component.fibonacci(n)).toBe(3);
  });

  // ******************************************

  // Casos de prueba de método principal

  it('totalserie(0) should return 3', () => {
    const n = 0;
    expect(component.totalserie(n)).toBe(3);
  });

  it('totalserie(5) should return 40', () => {
    const n = 5;
    expect(component.totalserie(n)).toBe(40);
  });

  it('totalserie(3) should return 17', () => {
    const n = 3;
    expect(component.totalserie(n)).toBe(17);
  });

  it('totalserie(1) should return 7', () => {
    const n = 1;
    expect(component.totalserie(n)).toBe(7);
  });

  it('totalserie(2) should return 10', () => {
    const n = 2;
    expect(component.totalserie(n)).toBe(10);
  });

  it('totalserie(10) should return 221', () => {
    const n = 10;
    expect(component.totalserie(n)).toBe(221);
  });

  it('totalserie(8) should return 124', () => {
    const n = 8;
    expect(component.totalserie(n)).toBe(124);
  });

  it('totalserie(15) should return 1259', () => {
    const n = 15;
    expect(component.totalserie(n)).toBe(1259);
  });

  it('totalserie(4) should return 35', () => {
    const n = 4;
    expect(component.totalserie(n)).toBe(35);
  });

  it('totalserie(7) should return 79', () => {
    const n = 7;
    expect(component.totalserie(n)).toBe(79);
  });

  // ******************************************
});
