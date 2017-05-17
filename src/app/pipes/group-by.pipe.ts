import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'groupBy'
})
export class GroupByPipe implements PipeTransform {

  transform(value: Array<any>, field: string): any {
    return _(value)
      .groupBy((element) => {
        return element[field];
      })
      .map((groupChildren, groupName) => {
        return {
          name: groupName,
          children: groupChildren
        };
      })
      .value();
  }
}
