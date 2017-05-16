import {Injectable} from '@angular/core';
import {Character} from '../models/character';

@Injectable()
export class CharacterService {

  getAllCharacters(): Character[] {
    return [
      {
        id: 1,
        name: 'Aberdeen',
        game: 'Animal Crossing',
        created: new Date(),
        bugs: []
      },
      {
        id: 2,
        name: 'Bob',
        game: 'Wild World',
        created: new Date(),
        bugs: []
      },
      {
        id: 3,
        name: 'Carver',
        game: 'Doubutsu no Mori e+',
        created: new Date(),
        bugs: []
      }
    ];
  }
}
