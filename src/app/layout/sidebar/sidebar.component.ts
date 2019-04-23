import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menu: any;

  constructor(public _sidebar: SidebarService) {}

  ngOnInit() {
    this.menu = this._sidebar.getMenu();
  }
}
