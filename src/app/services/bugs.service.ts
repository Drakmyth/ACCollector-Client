import {Injectable} from '@angular/core';
import {Bug} from '../models/bug';

@Injectable()
export class BugsService {

  constructor() {
  }

  getAllInCollection(): Bug[] {
    return [
      {
        id: 1,
        name: 'Common Butterfly',
        price: 80,
        location: 'Near Flowers',
        onIsland: true,
        notes: '',
        added: new Date('2012-04-23T18:25:43.511Z')
      },
      {
        id: 2,
        name: 'Snail',
        price: 250,
        location: 'On Flowers',
        onIsland: false,
        notes: 'Only available when raining',
        added: new Date('2012-04-23T18:25:43.511Z')
      },
      {
        id: 3,
        name: 'Hermit Crab',
        price: 1000,
        location: 'Beach',
        onIsland: true,
        notes: 'Exclusive to Island',
        added: new Date('2012-04-23T18:25:43.511Z')
      }
    ];
  }
}
