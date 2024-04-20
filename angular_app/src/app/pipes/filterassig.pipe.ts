import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterassig'
})
export class FilterassigPipe implements PipeTransform {

  transform(value: any, searchTearm: any): any {
    console.log('filter pipe', value); 

    console.log('search title', searchTearm);

    return value.filter(function(search: any) {
      return search.title.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
  }

}
