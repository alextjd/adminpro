import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any = [
    {
      title: 'Main',
      icon: 'mdi mdi-gauge',
      subitems: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'ProgressBar', url: '/progress' },
        { title: 'Graphs', url: '/graphs' },
      ],
    },
  ];
  constructor() {}

  getMenu() {
    return this.menu;
  }
}
