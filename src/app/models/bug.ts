export class Bug {

  constructor(public id: number,
              public name: string,
              public price: number,
              public location: string,
              public onIsland: boolean,
              public notes: string,
              public added: Date) {

  }
}
