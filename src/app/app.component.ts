import { Component } from '@angular/core';
import { AccountSettingsService } from './shared/services/account-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public _settings: AccountSettingsService) {}
}
