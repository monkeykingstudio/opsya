import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss']
})
export class LateralMenuComponent implements OnInit {

  public items: string[] = ['dashboard','defi','insurance','investment','corporate'];
  public activeItem:string = this.items[0];

  constructor() { }

  ngOnInit(): void {

  }

  switchItem(item:string) {
    this.activeItem = item;
  }

}
