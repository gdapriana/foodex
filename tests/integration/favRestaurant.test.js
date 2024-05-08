import FavBtnInitiator from '../../src/scripts/utils/fav-initiator';
import IntegrationTest from './utils';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resource';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

describe('Favorited A Restaurant', () => {
  beforeEach(() => {
    IntegrationTest.createFavContainer();
  });
  it('should show the like button when the restaurant has not been liked before', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favorite-container'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
  });
  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favorite-container'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="remove this restaurant from favorite"]')).toBeFalsy();
  });
  it('should be able to like the movie', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favorite-container'),
      restaurant: {
        id: 1,
      },
    });
    document.querySelector('#fav-btn').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });
  it('should not add a restaurant when it has no id', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favorite-container'),
      restaurant: {},
    });
    document.querySelector('#fav-btn').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
