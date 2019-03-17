import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(arr: any[], searchValue1: any[], searchValue2: any[]) {
    const result = [];

    for (const match of arr) {
      for (const search1 of searchValue1) {
         for (const search2 of searchValue2) {
           if (match.country === search1.item_text && match.description === search2.item_text) {
             result.push(match);
           }
         }
      }
    }
    return result;
  }
}
