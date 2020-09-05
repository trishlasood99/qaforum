import { Component, OnInit } from '@angular/core';
import {Report} from '../models/report.model';
import {ReportService} from '../services/report.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  reports:Report[];

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    this.getReports();
  }

  getReports()
  {
    this.reportService.getReports().subscribe(reports=>this.reports = reports);
  }

}
