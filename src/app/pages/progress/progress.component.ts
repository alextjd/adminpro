import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  max: number = 100;
  min: number = 0;
  progress: number = 0;

  constructor() {}

  ngOnInit() {}

  // Update progress value
  changeProgress(value: number) {
    this.progress = this.progress + value;
    this.checkProgress();
  }

  // Control progress limits
  checkProgress() {
    if (this.progress < this.min) {
      this.progress = this.min;
    }
    if (this.progress > this.max) {
      this.progress = this.max;
    }
  }
}
