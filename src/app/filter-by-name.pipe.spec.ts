/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FilterByNamePipe } from './filter-by-name.pipe';

describe('FilterByNamePipe', () => {

  let pipe: FilterByNamePipe;

  beforeEach(() => {
    pipe = new FilterByNamePipe();
  });

  it('should filter correctly', () => {
    const people = [
      { name: 'Harun' },
      { name: 'Zahos' },
      { name: 'Zaharias' }
    ];
    const expected = [
      { name: 'Zahos' },
      { name: 'Zaharias' }
    ];
    const result = pipe.transform(people, 'ah');
    expect(result).toEqual(expected);
  });
});
