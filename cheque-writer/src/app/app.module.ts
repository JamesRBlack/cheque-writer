import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StepsModule} from 'primeng/steps';
import {PanelModule} from 'primeng/panel';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {SidebarModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DigitsOnlyDirective} from './digits-only.directive';
import {AlphabetDirective} from './alphabet-directive';
import {ChequeOutputComponent} from './cheque-output/cheque-output.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cheque-output', component: ChequeOutputComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DigitsOnlyDirective,
    AlphabetDirective,
    ChequeOutputComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    StepsModule,
    PanelModule,
    SidebarModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
