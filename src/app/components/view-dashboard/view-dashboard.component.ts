import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.scss']
})
export class ViewDashboardComponent implements OnInit {
  fakeData = 1980232.21;
  treasury = 0;
  incrementBy = 4212;



  constructor() { }
  treasuryCount = setInterval(()=>{
    this.treasury = this.treasury++ + this.incrementBy;
    if(this.fakeData - this.treasury <= this.incrementBy) {
      clearInterval(this.treasuryCount);
      this.treasury = this.fakeData;
    }
  },.1)

  ngOnInit(): void {
  }

}
