import { ICard } from 'pokemon-tcg-sdk-typescript/dist/sdk';

class CardFilters {
  public filters: IcardFilter[];

  constructor(cardFilter: CardFiltersBuilder) {
    this.filters = cardFilter.filters;
  }
}

export default class CardFiltersBuilder {
  private _filters: IcardFilter[] = [];

  public get filters(): (IcardFilter)[] {
    return this._filters;
  }

  public filter(filter: IcardFilter): CardFiltersBuilder {
    this._filters.push(filter);
    return this;
  }

  public build(): IcardFilter[] {
    return new CardFilters(this).filters;
  }
};

export interface IcardFilter {
  name: keyof ICard;
  value: string | number;
}
