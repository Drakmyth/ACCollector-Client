import {Component, OnDestroy, OnInit} from '@angular/core';
import {BugsService} from '../services/bugs.service';
import {Bug} from '../models/bug';
import * as moment from 'moment';
import {Moment} from 'moment';
import {Observable} from 'rxjs';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'acc-day-chart',
  templateUrl: './day-chart.component.html',
  styleUrls: ['./day-chart.component.scss'],
  providers: [BugsService]
})
export class DayChartComponent implements OnInit, OnDestroy {

  private clock: Subscription;

  readonly timeLabels: string[];
  readonly tickMarkCount: number;
  readonly rowLineStartX: number;
  readonly rowLineEndX: number;
  readonly yOffset: number;
  readonly baseLine: number;
  readonly rowHeight: number;
  readonly rowLineWidth: number;
  readonly timeLabelOffset: number;

  segmentWidth: number;
  bugs: Bug[];
  height: number;
  totalHeight: number;
  currentTimeX: number;
  currentTimeText: string;

  constructor() {
    this.timeLabels = [
      '12:00a', '1:00', '2:00', '3:00', '4:00',
      '5:00', '6:00', '7:00', '8:00', '9:00',
      '10:00', '11:00', '12:00p', '1:00', '2:00',
      '3:00', '4:00', '5:00', '6:00', '7:00',
      '8:00', '9:00', '10:00', '11:00', '12:00a'
    ];

    this.tickMarkCount = 25;
    this.rowLineStartX = 130;
    this.rowLineWidth = 870;
    this.rowLineEndX = this.rowLineStartX + this.rowLineWidth;
    this.yOffset = 25;
    this.baseLine = this.yOffset + 15;
    this.rowHeight = 24;
    this.timeLabelOffset = 15;
  }

  ngOnInit() {

    this.segmentWidth = this.rowLineWidth / (this.tickMarkCount - 1);

    this.bugs = BugsService.getAllInCollection();
    this.height = this.baseLine + this.bugs.length * this.rowHeight - 5;
    this.totalHeight = this.height + this.rowHeight;

    this.clock = Observable
      .timer(0, 1000)
      .subscribe(() => {
        const now = moment();
        this.currentTimeX = this.rowLineStartX + this.getTimeOffset(now);
        this.currentTimeText = now.format('h:mma');
      });
  }

  ngOnDestroy(): void {
    this.clock.unsubscribe();
  }

  getTickX(index: number): number {
    return this.rowLineStartX + index * this.segmentWidth;
  }

  getRowNameY(index: number): number {

    return this.baseLine + index * this.rowHeight;
  }

  getRowLineY(index: number): number {

    return this.baseLine - 5 + index * this.rowHeight;
  }

  getTimeOffset(time: Moment): number {
    const hours = time.hours() * this.segmentWidth;
    const minutes = time.minutes() * (this.segmentWidth / 60);
    const seconds = time.seconds() * (this.segmentWidth / (60 * 60));

    return hours + minutes + seconds;
  }

  getTimeRects(index: number): Rect[] {

    const bug = this.bugs[index];

    const availability = bug.availability[0];

    const rects = [];
    for (const time of availability.times) {

      const fromOffset = this.getTimeOffset(time.from);
      const toOffset = this.getTimeOffset(time.to);

      const x = this.rowLineStartX + fromOffset;
      const y = this.yOffset + 1 + index * this.rowHeight;
      const width = toOffset - fromOffset;

      rects.push(new Rect(x, y, width, this.rowHeight - 6));
    }

    return rects;
  }
}

class Rect {
  constructor(public x: number, public y: number, public width: number, public height: number) {
  }
}
