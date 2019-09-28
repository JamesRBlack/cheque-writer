import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cheque-output',
  templateUrl: './cheque-output.component.html',
  styleUrls: ['./cheque-output.component.scss']
})
export class ChequeOutputComponent implements OnInit {
  activeIndex: number = 1;

  outPutModel = {
    name : '',
    moneyValue : 0
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.outPutModel.name = history.state.name;
    this.outPutModel.moneyValue = history.state.moneyValue;
  }

  navigateBack() {
    this.router.navigate([''], {state: {name: this.outPutModel.name,
        moneyValue: this.outPutModel.moneyValue, numericMoneyValue: history.state.numericMoneyValue}});
  }

}
