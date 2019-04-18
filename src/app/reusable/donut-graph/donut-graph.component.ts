import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styleUrls: ['./donut-graph.component.scss'],
})
export class DonutGraphComponent implements OnInit {
  labels: string[] = ['Yepale', 'Buenas tardes', 'Ey que pasa'];
  data: number[][] = [[50, 150, 120]];

  constructor() {}

  ngOnInit() {}
}
