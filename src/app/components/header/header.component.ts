import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userPanel: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleUserPanel($event: any): void {
    console.log('toggle from parent');
    this.userPanel = !this.userPanel;
    $event.stopPropagation();
  }

  close($event: any): boolean {
    console.log($event, 'close')
    return this.userPanel = !this.userPanel;

  }

}
