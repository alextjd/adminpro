import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphsComponent } from './graphs/graphs.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraphsComponent,
    PagesComponent,
  ],
  imports: [SharedModule, LayoutModule, AppRoutingModule],
  exports: [
    ProgressComponent,
    DashboardComponent,
    GraphsComponent,
    PagesComponent,
  ],
})
export class PagesModule {}
