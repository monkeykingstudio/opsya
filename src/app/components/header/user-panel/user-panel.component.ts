import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})
export class UserPanelComponent implements OnInit {

  @Input()
  show: any;
  constructor() { }

  ngOnInit(): void {
  }

  close($event: any): void {
    console.log('close')
    this.show = false;
    $event.stopPropagation();
  }

}
