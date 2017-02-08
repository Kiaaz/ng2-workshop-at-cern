import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(people: Array<{}>, expression: string): Array<{}> {
    if (!people) { return null; }
    return people
      .filter((person: { name: string }) => person.name.match(expression));
  }

}
