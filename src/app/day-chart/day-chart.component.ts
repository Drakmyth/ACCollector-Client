import {Component, OnInit} from '@angular/core';
import {BugsService} from '../services/bugs.service';
import {Bug} from '../models/bug';

@Component({
  selector: 'acc-day-chart',
  templateUrl: './day-chart.component.html',
  styleUrls: ['./day-chart.component.scss'],
  providers: [BugsService]
})
export class DayChartComponent implements OnInit {

  bugsToday: Bug[];
  readonly timeLabels: string[] = [
    '12:00a',
    '1:00',
    '2:00',
    '3:00',
    '4:00',
    '5:00',
    '6:00',
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00p',
    '1:00',
    '2:00',
    '3:00',
    '4:00',
    '5:00',
    '6:00',
    '7:00',
    '8:00',
    '9:00',
    '10:00',
    '11:00',
    '12:00a'
  ];

  constructor() {
  }

  ngOnInit() {
    this.bugsToday = BugsService.getAllInCollection();
  }
}
