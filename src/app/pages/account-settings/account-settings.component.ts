import { Component, OnInit } from '@angular/core';

import { AccountSettingsService } from 'src/app/shared/services/account-settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  selectedTheme: string;

  constructor(public _settings: AccountSettingsService) {}

  ngOnInit() {}

  // Update color theme
  changeColor(color: string) {
    this.selectedTheme = color;
    this._settings.applyTheme(color);
  }
}
