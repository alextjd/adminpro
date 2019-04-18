import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphsComponent } from './graphs/graphs.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages.routes';
import { ReusableModule } from '../reusable/reusable.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphsComponent,
    PagesComponent,
    AccountSettingsComponent,
  ],
  imports: [
    SharedModule,
    LayoutModule,
    FormsModule,
    ReusableModule,
    PagesRoutingModule,
  ],
  exports: [
    ProgressComponent,
    DashboardComponent,
    GraphsComponent,
    PagesComponent,
  ],
})
export class PagesModule {}
