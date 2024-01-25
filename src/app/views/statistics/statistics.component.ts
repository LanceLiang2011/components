import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  @Input() data: Stat[] = [];
}

interface Stat {
  label: string;
  value: number | string;
}