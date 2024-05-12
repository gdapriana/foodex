import IntegrationTest from './utils';
import FavBtnInitiator from '../../src/scripts/utils/fav-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resource';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

describe('Unfavorited A restaurant', () => {
  beforeEach(async () => {
    await IntegrationTest.createFavContainer();
    await IntegrationTest.createFavRestaurant();
  });
  afterEach(async () => {
    await IntegrationTest.removeFavRestaurant();
  });
  it('should display unlike widget when the restaurant has been favorited', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favorite-container'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="remove this restaurant from favorite"]')).toBeTruthy();
  });
  it('should not display like widget when the restaurant has been favorited', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favorite-container'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeFalsy();
  });
  it('should be able to remove favorited restaurant from the list', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favorite-container'),
      restaurant: {
        id: 1,
      },
    });
    document.querySelector('[aria-label="remove this restaurant from favorite"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
  it('should not throw error when user click unfavorited widget if the unfavorited restaurant is not in the list', async () => {
    await FavBtnInitiator.init({
      favBtnContainer: document.querySelector('#favorite-container'),
      restaurant: {
        id: 1,
      },
    });
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    document.querySelector('[aria-label="remove this restaurant from favorite"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
