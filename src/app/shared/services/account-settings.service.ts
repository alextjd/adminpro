import { Injectable, Inject } from '@angular/core';
import { Settings } from '../../pages/account-settings/shared/settings';
import { DOCUMENT } from '@angular/common';
import { mainThemeId } from '../models/keywords';

@Injectable({
  providedIn: 'root',
})
export class AccountSettingsService {
  settings: Settings = {
    themeUrl: 'assets/css/colors/default.css',
    theme: 'default',
  };

  constructor(@Inject(DOCUMENT) private document: any) {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    const userSettings: string = localStorage.getItem('settings');
    this.settings = userSettings ? JSON.parse(userSettings) : this.settings;
    this.applyTheme(this.settings.theme);
  }

  applyTheme(theme: string) {
    const url: string = `assets/css/colors/${theme}.css`;
    this.document.getElementById(mainThemeId).setAttribute('href', url);
    this.settings.theme = theme;
    this.settings.themeUrl = url;
    this.saveSettings();
  }
}
