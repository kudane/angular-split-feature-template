import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSummaryReportComponent } from './admin-summary-report.component';

const routes: Routes = [
  {
    path: "admin",
    children: [
      { path: "summaryreport", component: AdminSummaryReportComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSummaryReportRoutingModule { }
