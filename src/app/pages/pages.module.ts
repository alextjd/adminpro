import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphsComponent } from './graphs/graphs.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages.routes';
import { IncrementerComponent } from '../reusable/incrementer/incrementer.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphsComponent,
    PagesComponent,
    IncrementerComponent,
  ],
  imports: [SharedModule, LayoutModule, FormsModule, PagesRoutingModule],
  exports: [
    ProgressComponent,
    DashboardComponent,
    GraphsComponent,
    PagesComponent,
  ],
})
export class PagesModule {}
