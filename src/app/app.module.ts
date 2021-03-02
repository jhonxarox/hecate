import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

import { NgApexchartsModule } from 'ng-apexcharts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketInsightComponent } from './market-insight/market-insight.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PurchaseChartComponent } from './purchase-chart/purchase-chart.component';
import { ListCardComponent } from './list-card/list-card.component';
import { FilterPeriodComponent } from './filter-period/filter-period.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketInsightComponent,
    PurchaseChartComponent,
    ListCardComponent,
    FilterPeriodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
