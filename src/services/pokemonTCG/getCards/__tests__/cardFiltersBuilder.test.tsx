import CardFiltersBuilder, { IcardFilter } from '../CardFiltersBuilder';

describe('cardFiltersBuilder', () => {
  const aFilter: IcardFilter = { name: 'supertype', value: 'pokemon' };
  const otherFilter: IcardFilter = { name: 'name', value: 'pikachu' };
  const filters = new CardFiltersBuilder()
    .filter(aFilter)
    .filter(otherFilter)
    .build();
  test('should build a card filter as an array', () => {
    expect(filters).toHaveLength(2);
  });

  test('should contains a card filters', () => {
    expect(filters).toContain(aFilter);
    expect(filters).toContain(otherFilter);
  });
});
