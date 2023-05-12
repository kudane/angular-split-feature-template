import { Component } from '@angular/core';
import { AdminSearchService } from './services/admin-search-service';
import { AdminReportService } from './services/admin-report-service';

@Component({
  selector: 'admin-summary-report',
  templateUrl: './admin-summary-report.component.html',
  providers: [
    AdminSearchService,
    AdminReportService
  ]
})
export class AdminSummaryReportComponent {
  title = "test";

  constructor(public searchData: AdminSearchService, public reportData: AdminReportService) {
  }

  onClickFrom() {
    const searchs = this.searchData.getValues();
    this.reportData.getValueFormApi(searchs);
  }
}
