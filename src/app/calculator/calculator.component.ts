import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;
  operand1: number;
  operand2: number;
  operator = '+';

  onOperand1Change(value) {
    this.operand1 = Number(value);
  }
  onOperand2Change(value) {
    this.operand2 = Number(value);
  }
  onSelectOperator(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.operand1 + this.operand2;
        break;
      case '-':
        this.result = this.operand1 - this.operand2;
        break;
      case '*':
        this.result = this.operand1 * this.operand2;
        break;
      case '/':
        this.result = this.operand1 / this.operand2;
        break;

    }
  }

  // add(operand1, operand2, operator) {
  //   this.result = operand1 + operand2;
  // }
  //
  // divide(operand1, operand2, operator) {
  //   this.result = operand1 / operand2;
  // }
  //
  // multiply(operand1, operand2, operator) {
  //   this.result = operand1 * operand2;
  // }
  //
  // subtract(operand1, operand2, operator) {
  //   this.result = operand1 - operand2;
  // }


  constructor() {
  }

  ngOnInit() {
  }

}
