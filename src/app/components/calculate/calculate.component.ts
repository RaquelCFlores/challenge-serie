import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-calculate',
  template: '',
})
export class CalculateComponent implements OnChanges {
  @Input() number!: number;
  @Output() resultSerie: EventEmitter<number> = new EventEmitter();

  result!: number;

  ngOnChanges(): void {
    this.result = this.totalserie(this.number);
    if (this.result) {
      this.resultSerie.emit(this.result);
    }
  }

  dobleTriangular(n: number): number {
    if (n < 1) return 0;

    const numTriangular = n * (n + 1);

    return numTriangular;
  }

  doblePrimo(n: number): number {
    if (n <= 1) return 0;

    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return 0;
    }

    return 2 * n;
  }

  fibonacci(n: number): number {
    if (n <= 1) return n;

    let position2 = 0;
    let position1 = 1;
    let numFibonacci = 0;

    for (let i = 2; i <= n; i++) {
      numFibonacci = position1 + position2;
      position2 = position1;
      position1 = numFibonacci;
    }

    return numFibonacci;
  }

  totalserie(n: number): number {
    const serie =
      this.dobleTriangular(n + 1) - this.doblePrimo(n) + this.fibonacci(n + 1);
    return serie;
  }
}
