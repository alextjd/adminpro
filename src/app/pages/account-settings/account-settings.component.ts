import { Component, OnInit, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { mainThemeId } from 'src/app/shared/models/keywords';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document) {}

  ngOnInit() {}

  // Update color theme
  changeColor(color: string, ref: any) {
    const url: string = `assets/css/colors/${color}.css`;
    this.document.getElementById(mainThemeId).setAttribute('href', url);
    this.applyCheck(ref);
  }

  applyCheck(ref: any) {
    const themes: any = document.getElementsByClassName('selector');
    for (const theme of themes) {
      theme.classList.remove('working');
    }
    ref.classList.add('working');
  }
}
