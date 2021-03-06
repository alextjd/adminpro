import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncrementerComponent } from './incrementer/incrementer.component';
import { DonutGraphComponent } from './donut-graph/donut-graph.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [IncrementerComponent, DonutGraphComponent],
  imports: [FormsModule, RouterModule, ChartsModule],
  exports: [IncrementerComponent, DonutGraphComponent],
})
export class ReusableModule {}
