import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('number') number!: ElementRef<HTMLInputElement>;

  value!: number;
  resultTotal!: number;
  flag: boolean = true;

  calculate() {
    this.value = Number(this.number.nativeElement.value);

    if (this.value < 0) {
      return;
    }

    this.number.nativeElement.value = '';
    this.flag = true;
  }

  resultSerie(event: number) {
    this.resultTotal = event;
  }

  flatButton() {
    this.flag = false;
  }
}
