import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-emdashboard',
  templateUrl: './emdashboard.component.html',
  styleUrls: ['./emdashboard.component.css']
})
export class EmdashboardComponent implements OnInit {
  jobs:any = [];
  key: any;
  constructor(private j: JobService) { }

  ngOnInit(): void {
    this.j.getjobs().subscribe(jobs => {
      console.log("calling");
      this.jobs = jobs;
    })
  }

}
