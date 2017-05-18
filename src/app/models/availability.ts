import {DateTimeRange} from './dateTimeRange';

export class Availability {

  constructor(public date: DateTimeRange, public times: DateTimeRange[]) {

  }
}
