import {Injectable} from '@angular/core';
import {Bug} from '../models/bug';
import * as moment from 'moment';

@Injectable()
export class BugsService {

  static getAllInCollection(): Bug[] {
    return [
      {
        id: 1,
        name: 'Common Butterfly',
        price: 80,
        location: 'Near Flowers',
        onIsland: true,
        notes: '',
        availability: [
          {
            date: {
              from: moment('03-01', 'MM-DD'),
              to: moment('06-30', 'MM-DD')
            },
            times: [
              {
                from: moment('04:00:00', 'hh:mm:ss'),
                to: moment('18:59:59', 'hh:mm:ss')
              }
            ]
          },
          {
            date: {
              from: moment('09-01', 'MM-DD'),
              to: moment('09-30', 'MM-DD')
            },
            times: [
              {
                from: moment('08:00:00', 'hh:mm:ss'),
                to: moment('15:59:59', 'hh:mm:ss')
              }
            ]
          }
        ],
        added: new Date('2012-04-23T18:25:43.511Z')
      },
      {
        id: 2,
        name: 'Snail',
        price: 250,
        location: 'On Flowers',
        onIsland: false,
        notes: 'Only available when raining',
        availability: [
          {
            date: {
              from: moment('04-01', 'MM-DD'),
              to: moment('09-30', 'MM-DD')
            },
            times: [
              {
                from: moment('00:00:00', 'hh:mm:ss'),
                to: moment('23:59:59', 'hh:mm:ss')
              }
            ]
          }
        ],
        added: new Date('2012-04-23T18:25:43.511Z')
      },
      {
        id: 3,
        name: 'Hermit Crab',
        price: 1000,
        location: 'Beach',
        onIsland: true,
        notes: 'Exclusive to Island',
        availability: [
          {
            date: {
              from: moment('01-01', 'MM-DD'),
              to: moment('12-31', 'MM-DD')
            },
            times: [
              {
                from: moment('00:00:00', 'hh:mm:ss'),
                to: moment('23:59:59', 'hh:mm:ss')
              }
            ]
          }
        ],
        added: new Date('2012-04-23T18:25:43.511Z')
      },
      {
        id: 4,
        name: 'Walking Stick',
        price: 600,
        location: 'On Trees',
        onIsland: true,
        notes: '',
        availability: [
          {
            date: {
              from: moment('07-01', 'MM-DD'),
              to: moment('08-31', 'MM-DD')
            },
            times: [
              {
                from: moment('04:00:00', 'hh:mm:ss'),
                to: moment('07:59:59', 'hh:mm:ss')
              },
              {
                from: moment('17:00:00', 'hh:mm:ss'),
                to: moment('18:59:59', 'hh:mm:ss')
              }
            ]
          },
          {
            date: {
              from: moment('09-01', 'MM-DD'),
              to: moment('11-30', 'MM-DD')
            },
            times: [
              {
                from: moment('04:00:00', 'hh:mm:ss'),
                to: moment('18:59:59', 'hh:mm:ss')
              }
            ]
          }
        ],
        added: new Date('2012-04-23T18:25:43.511Z')
      }
    ];
  }
}
