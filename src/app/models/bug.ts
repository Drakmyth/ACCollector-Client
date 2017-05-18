import {Availability} from './availability';
export class Bug {

  constructor(public id: number,
              public name: string,
              public price: number,
              public location: string,
              public onIsland: boolean,
              public notes: string,
              public availability: Availability[],
              public added: Date) {

  }
}
