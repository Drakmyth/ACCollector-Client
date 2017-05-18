import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(value: number): number[] {
    const counter = [];

    for (let i = 0; i < value; i++) {
      counter.push(i);
    }

    return counter;
  }

}
