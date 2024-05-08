import FavoriteRestaurants from '../../data/favorite-restaurants';
import restaurantCard from '../templates/restaurant-card';

const RestaurantFavorites = {
  async render() {
    return `
      <div id="favorited-containter">
        <custom-header title="Favorited Restaurants"></custom-header>
        <div id="favorited-wrapper"></div>
      </div>
    `;
  },

  async afterRender() {
    const data = await FavoriteRestaurants.getAllRestaurants();
    const favoritedWrapper = document.querySelector('#favorited-wrapper');

    if (data.length === 0) favoritedWrapper.innerHTML = '<h3 class="empty-favorite">Empty</h3>';

    data.forEach((restaurant) => {
      favoritedWrapper.innerHTML += restaurantCard(restaurant);
    });
  },
};

export default RestaurantFavorites;
