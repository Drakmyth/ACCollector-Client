import {Bug} from './bug';
import {Games} from './games';
export class Character {

  constructor(public id: number,
              public name: string,
              public game: Games,
              public created: Date,
              public bugs: Bug[]) {

  }
}
