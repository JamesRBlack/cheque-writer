import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[];
  activeIndex: number;

  inputForm: FormGroup = new FormGroup({
    name: new FormControl('',[
      Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z ]*$')
      ])
});

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.activeIndex = 0;
    this.items = [
      {label: 'Enter Details'},
      {label: 'Cheque Output'},
    ];
  }

  indexEventHandler($event: any) {
    this.activeIndex = $event.activeIndex;
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

}
