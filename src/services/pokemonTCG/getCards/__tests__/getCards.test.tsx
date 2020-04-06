import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getCards } from '../getCards';
import { IcardFilter } from '../CardFiltersBuilder';

describe('Get Cards', () => {
  const axiosMock = new MockAdapter(axios);

  beforeEach(() => {
    axiosMock.resetHistory();
    axiosMock.onGet(/https:\/\/api.pokemontcg.io\/v1\/(.*?)$/)
      .reply(200, { data: [] });
  });
  afterAll(() => {
    axiosMock.restore();
  });
  test('should do the request with related URL', async () => {
    const expectUrl = 'https://api.pokemontcg.io/v1/cards?supertype=pokemon&';
    const filters: IcardFilter[] = [{
      name: 'supertype',
      value: 'pokemon'
    }];

    await getCards(filters);

    expect(axiosMock.history.get.length).toBe(1);
    expect(axiosMock.history.get[0].url).toBe(expectUrl);
  });
  test('should retrieve undefined when request is invalid', async () => {
    const expectedResult = undefined;

    axiosMock.onGet(/https:\/\/api.pokemontcg.io\/v1\/(.*?)$/).reply(400, {});
    const filters: IcardFilter[] = [{
      name: 'supertype',
      value: 'pokemon'
    }];

    const cards = await getCards(filters);

    expect(cards).toEqual(expectedResult);
  });
});

