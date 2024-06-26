import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-resource';

class IntegrationTest {
  static async createFavContainer() {
    document.body.innerHTML = '<div id="favorite-container"></div>';
  }

  static async removeFavContainer() {
    document.querySelector('body#favorite-container').remove();
  }

  static async createFavRestaurant() {
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  }

  static async removeFavRestaurant() {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  }

  static async createCustomFavRestaurant(id) {
    await FavoriteRestaurantIdb.putRestaurant({ id });
  }

  static async deleteCustomFavRestaurant(id) {
    await FavoriteRestaurantIdb.deleteRestaurant(id);
  }
}

export default IntegrationTest;
