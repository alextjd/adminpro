import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styleUrls: ['./incrementer.component.scss'],
})
export class IncrementerComponent implements OnInit {
  @Input() title: string;
  @Input() progress: number;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  max: number = 100;
  min: number = 0;

  constructor() {
    this.title = 'Incrementer title';
    this.progress = 0;
  }

  ngOnInit() {}

  // Update progress value
  changeProgress(value: number, isTextInput?: boolean) {
    this.progress = isTextInput ? value : this.progress + value;
    this.checkProgress();
    this.valueChange.emit(this.progress);
  }

  // Control progress limits
  checkProgress() {
    if (this.progress < this.min) {
      this.progress = this.min;
    }
    if (this.progress > this.max) {
      this.progress = this.max;
    }
    const input: any = document.getElementById('progress-text');
    input.value = this.progress;
  }
}
