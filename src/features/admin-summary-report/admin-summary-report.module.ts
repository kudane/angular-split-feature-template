import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminSummaryReportRoutingModule } from './admin-summary-report.routing';
import { AdminSummaryReportComponent } from './admin-summary-report.component';

@NgModule({
  declarations: [
    AdminSummaryReportComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    AdminSummaryReportRoutingModule
  ],
  providers: [],
})
export class AdminSummaryReportModule { }
