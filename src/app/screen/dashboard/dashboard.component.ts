import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  leadMetrics = [
    {
      title: 'Total Leads',
      value: 8418,
      degree: 3,
    },
    {
      title: 'Revised',
      degree: 8,
      value: 52
    },
    {
      title: 'Rejected',
      degree: 1,
      value: 85
    },
    {
      title: 'Bounced Load',
      degree: 6,
      value: 7545
    },
    {
      title: 'Default Score',
      degree: 0,
      value: 2.6
    },
    {
      title: 'Maker/Taker',
      degree: 0,
      value: 0.86
    },
    {
      title: 'Transactions',
      degree: 0,
      value: 45456
    },
  ];

  ngOnInit(): void {
    
  }
 

}

