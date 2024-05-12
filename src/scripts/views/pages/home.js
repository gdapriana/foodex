import Swal from 'sweetalert2';
import FoodexSource from '../../data/foodex-resource';
import { metadata } from '../../data/metadata';
import { feedbackError } from '../../utils/swal-feedback';
import restaurantCard from '../components/restaurant-card';

const Home = {
  async render() {
    return `
      <div id="hero">
        <picture>
          <source media="(max-width: 768px)" srcset="./images/hero/hero-image-small.jpg">
          <img src="./images/hero/hero-image-large.jpg" alt="hero image">
        </picture>
        <article>
          <h1 tabindex="0">Welcome to <span>${metadata.app}</span></h1>
          <h3 tabindex="0">${metadata.description}</h3>
          <a href="#"><img src="/images/rocket.svg"  alt="rocket"/>Explore Now</a>
        </article>
      </div>

      <div id="home-restaurants-root">
        <my-header-section title="Restaurants List" align="center"></my-header-section>    
        <div id="home-restaurants-wrapper"></div>
      </div>
    `;
  },
  async afterRender() {
    const wrapper = document.querySelector('#home-restaurants-wrapper');
    const loader = document.querySelector('#loader');

    loader.classList.toggle('show');
    try {
      const { restaurants } = await FoodexSource.getRestaurantsList();
      restaurants.forEach((restaurant) => {
        wrapper.innerHTML += restaurantCard(restaurant);
      });
      loader.classList.toggle('show');
    } catch (e) {
      loader.classList.toggle('show');
      await Swal.fire(feedbackError(e.message));
    }
  },
};

export default Home;
