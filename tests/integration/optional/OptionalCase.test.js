import FavoriteRestaurantIdb from '../../../src/scripts/data/favorite-resource';
import IntegrationTest from '../utils';

global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

describe('Optional Case', () => {
  beforeEach(async () => {
    await IntegrationTest.createCustomFavRestaurant(1);
    await IntegrationTest.createCustomFavRestaurant(2);
  });
  afterEach(async () => {
    await IntegrationTest.deleteCustomFavRestaurant(1);
    await IntegrationTest.deleteCustomFavRestaurant(2);
  });

  // GET all restaurants
  it('should can get all restaurants', async () => {
    const favRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(favRestaurants).toEqual([{ id: 1 }, { id: 2 }]);
  });

  // GET restaurant
  it('should can get one restaurant', async () => {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
  });
  it('should cannot get one restaurant, no id', async () => {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant();
    expect(restaurant).toEqual(undefined);
  });
  it('should cannot get one restaurant, id not found', async () => {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(99);
    expect(restaurant).toEqual(undefined);
  });

  // PUT restaurant
  it('should can put one restaurant', async () => {
    await FavoriteRestaurantIdb.putRestaurant({ id: 3 });
    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allRestaurants).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    await FavoriteRestaurantIdb.deleteRestaurant(3);
  });
  it('should cannot put one restaurant, no id', async () => {
    await FavoriteRestaurantIdb.putRestaurant({ });
    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allRestaurants).toEqual([{ id: 1 }, { id: 2 }]);
  });
  it('should cannot put one restaurant, empty id', async () => {
    await FavoriteRestaurantIdb.putRestaurant({ id: '' });
    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allRestaurants).toEqual([{ id: 1 }, { id: 2 }]);
  });

  // DELETE restaurant
  it('should can delete one restaurant', async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(allRestaurants).toEqual([{ id: 2 }]);
  });
  it('should cannot delete one restaurant, no id', async () => {
    const deleteRestaurant = await FavoriteRestaurantIdb.deleteRestaurant();
    const allRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    expect(deleteRestaurant).toEqual(undefined);
    expect(allRestaurants).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
