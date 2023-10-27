import { Pipe, PipeTransform } from '@angular/core';
import { ICoins } from './ICoins';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ICoins[], search: string): ICoins[] {
    if (!search) {
      return value;
    }
    console.log(search);
    
    return value.filter(term => term.name?.toLowerCase().includes(search.toLowerCase()));
  }

}
