import { Component, OnInit, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { mainThemeId } from 'src/app/shared/models/keywords';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  selectedTheme: string = 'default';

  constructor(@Inject(DOCUMENT) private document) {}

  ngOnInit() {}

  // Update color theme
  changeColor(color: string) {
    const url: string = `assets/css/colors/${color}.css`;
    this.document.getElementById(mainThemeId).setAttribute('href', url);
    this.selectedTheme = color;
  }
}
