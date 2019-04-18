import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styleUrls: ['./donut-graph.component.scss'],
})
export class DonutGraphComponent implements OnInit {
  @Input() labels: string[];
  @Input() data: number[][] = [[50, 150, 120]];
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
