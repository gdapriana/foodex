import Swal from 'sweetalert2';
import FoodexSource from '../../data/foodex-source';
import restaurantCard from '../templates/restaurant-card';

const RestaurantsList = {
  async render() {
    return `
      <div id="hero-wrapper">
        <img id="hero-image" src="/hero-image.jpg" alt="hero image">
      </div>
      <div id="restaurants-list-container">
        <custom-header title="Explore Restaurant"></custom-header>
        <div class="loading loading-home">Loading....</div>
        <div id="restaurants-list-wrapper">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsList = document.querySelector('#restaurants-list-wrapper');
    const loading = document.querySelector('.loading-home');
    loading.classList.remove('hide');
    loading.classList.add('show');

    // after render
    try {
      const data = await FoodexSource.getRestaurantsList();
      loading.classList.add('hide');
      loading.classList.remove('show');
      data.restaurants.forEach((restaurant) => {
        restaurantsList.innerHTML += restaurantCard(restaurant);
      });
    } catch (e) {
      console.log(e);
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Error: ${e.message}`,
      });
    }
  },
};

export default RestaurantsList;
