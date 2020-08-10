import { Pipe, PipeTransform } from '@angular/core';
import {Blog} from   './blog';

@Pipe({
  name: 'blogFilter'
})
export class BlogFilterPipe implements PipeTransform {

  transform(value: Blog[], filterText: string): Blog[] {
    filterText = filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((p:Blog)=>p.title
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
