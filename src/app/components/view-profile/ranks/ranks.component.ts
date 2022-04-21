import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.scss']
})
export class RanksComponent implements OnInit {

  private states: number[] = [1,2,3,4];
  public currentState: number = 0;
  public rankDisplay: boolean = false;
  public rankInfo: boolean = false;


  constructor() { }

  ngOnInit(): void {
    //receive rank from mongoDB -- this.states[0] is a placeholder
    this.switch(this.states[0]);
  }

  switch(rank: number):void {
    this.rankDisplay = false;
    this.rankInfo = false;


    this.currentState = rank;

    setTimeout( (): void => {
      this.rankDisplay = true;
    this.rankInfo = true;

  }, 1300);
  }

}
