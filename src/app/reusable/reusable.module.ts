import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncrementerComponent } from './incrementer/incrementer.component';

@NgModule({
  declarations: [IncrementerComponent],
  imports: [FormsModule],
})
export class ReusableModule {}
