import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequeOutputComponent } from './cheque-output.component';

describe('ChequeOutputComponent', () => {
  let component: ChequeOutputComponent;
  let fixture: ComponentFixture<ChequeOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChequeOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequeOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
