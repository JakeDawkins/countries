import { groupCountriesByStartingLetter } from './groupCountriesByStartingLetter';

describe('groupCountriesByStartingLetter', () => {
  it('handles empty list', () => {
    expect(groupCountriesByStartingLetter([])).toEqual({});
  });
  it('handles undefined list', () => {
    expect(groupCountriesByStartingLetter()).toEqual({});
  });
  it('sorts by letter appropriately', () => {
    expect(
      groupCountriesByStartingLetter([
        { name: 'AAAAAA' },
        { name: 'BBBBB' },
        { name: 'ABCDE' },
      ]),
    ).toEqual({
      A: [{ name: 'AAAAAA' }, { name: 'ABCDE' }],
      B: [{ name: 'BBBBB' }],
    });
  });
});
