import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activeIndex: number = 0;

  inputForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z ]*$')
    ]),
    value: new FormControl('', [
      Validators.required,
      Validators.maxLength(9)
    ]),
  });

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (history.state.name) {
      this.inputForm.get('name').setValue(history.state.name);
    }
    if (history.state.numericMoneyValue) {
      this.inputForm.get('value').setValue(history.state.numericMoneyValue);
    }
  }

  onSubmit() {
    const moneyValue = this.inputForm.get('value').value as number;
    const name = this.inputForm.get('name').value as string;
    let wordValue;
    const numbers = moneyValue.toString().split('.');
    const whole = this.convertValueToWords(numbers[0]);
    if (numbers.length === 2) {
      const fraction = this.convertValueToWords(numbers[1]);
      wordValue = whole + ' AND ' + fraction + ' CENTS';
    } else {
      wordValue = whole;
    }
    this.router.navigate(['/cheque-output'], {
      state: {
        name: name,
        moneyValue: wordValue, numericMoneyValue: moneyValue
      }
    });
  }

  convertValueToWords(moneyValue: string) {
    const a = ['', 'ONE ', 'TWO ', 'THREE ', 'FOUR ', 'FIVE ', 'SIX ', 'SEVEN ', 'EIGHT ', 'NINE ', 'TEN ',
      'ELEVEN ', 'TWELVE ', 'THIRTEEN ', 'FOURTEEN ', 'FIFTEEN ', 'SIXTEEN ', 'SEVENTEEN ', 'EIGHTEEN ', 'NINETEEN '];
    const b = ['', '', 'TWENTY', 'THIRTY', 'FORTY', 'FIFTY', 'SIXTY', 'SEVENTY', 'EIGHTY', 'NINETY'];

    let result = '';
    if ((moneyValue = moneyValue.toString()).length > 9) return 'overflow';
    let n = ('000000000' + moneyValue).substr(-9).match(/^(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})$/);

    if (!n) {
      return;
    } else {
      result += (Number(n[1]) !== 0) ? (a[Number(n[1])] || b[n[1][0]] + '-' + a[n[1][1]]) + 'HUNDRED ' : '';
      result += (Number(n[2]) !== 0) ? (a[Number(n[2])] || b[n[2][0]] + '-' + a[n[2][1]]) + 'MILLION ' : '';
      result += (Number(n[3]) !== 0) ? (a[Number(n[3])] || b[n[3][0]] + '-' + a[n[3][1]]) + 'HUNDRED ' : '';
      result += (Number(n[4]) !== 0) ? (a[Number(n[4])] || b[n[4][0]] + '-' + a[n[4][1]]) + 'THOUSAND ' : '';
      result += (Number(n[5]) !== 0) ? (a[Number(n[5])] || b[n[5][0]] + '-' + a[n[5][1]]) + 'HUNDRED ' : '';
      result += (Number(n[6]) !== 0) ? ((result !== '') ? 'AND ' : '') + (a[Number(n[6])] || b[n[6][0]] + '-' + a[n[6][1]]) : '';
    }

    return result.trim();
  }

  get canProceedToNextPage() {
    return this.inputForm.get('value').value === '' || this.inputForm.get('name').value === '';
  }

  resetValues() {
    this.inputForm.reset();
  }

}
