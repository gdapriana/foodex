import Swal from 'sweetalert2';
import { feedbackError } from '../../utils/swal-feedback';
import FavoriteRestaurantIdb from '../../data/favorite-resource';
import restaurantCard from '../components/restaurant-card';

const Favorite = {
  async render() {
    return `
      <div id="favorite-root"></div>
    `;
  },
  async afterRender() {
    const favoriteRoot = document.querySelector('#favorite-root');
    const loader = document.querySelector('#loader');
    loader.classList.toggle('show');
    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      if (restaurants.length === 0) {
        favoriteRoot.innerHTML = `
          <h4 tabindex="0" style="color: red; text-align: center; position: absolute; width: 100%; margin: 20px;">No Restaurants Favorited</h4>
        `;
      }
      restaurants.forEach((restaurant) => {
        favoriteRoot.innerHTML += restaurantCard(restaurant);
      });
      loader.classList.toggle('show');
    } catch (err) {
      loader.classList.toggle('show');
      await Swal.fire(feedbackError(err.message));
    }
  },
};

export default Favorite;
