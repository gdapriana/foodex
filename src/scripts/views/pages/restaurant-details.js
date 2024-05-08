import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import FoodexSource from '../../data/foodex-source';
import restaurantDetails from '../templates/restaurant-details';
import { createAddtoFavoriteButtonTemplate } from '../templates/template-creator';
import FavFunctionality from '../../utils/fav-functionality';
import ReviewFunctionality from '../../utils/review-functionality';
import { sendDataToWs } from '../../utils/ws-initiator';

const RestaurantDetails = {
  async render() {
    return `
      <div id="restaurant-details-container">
        <div class="loading loading-details hide">Loading...</div>
        <div id="favoriteButtonContainer"></div>
        <article id="restaurant-details-wrapper"></article>
        <div id="review-form-container">
            <custom-header title="Post your review"></custom-header>
            <form action="" id="form-review">
                <label class="form-label" for="review-name">
                    <span>Name</span>
                    <input type="text" minlength="3" id="review-name" name="name" placeholder="Your Name" required>
                </label>
                <label class="form-label" for="review-text">
                    <span>Message</span>
                    <textarea name="review-text" minlength="3" required id="review-text" placeholder="Your review" rows="10"></textarea>
                </label>
                <button id="submit-review-btn" type="submit">Send</button>
            </form>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loading = document.querySelector('.loading-details');
    const detailWrapper = document.querySelector('#restaurant-details-wrapper');
    const favBtn = document.querySelector('#favoriteButtonContainer');
    loading.classList.remove('hide');
    loading.classList.add('show');

    try {
      const data = await FoodexSource.getRestaurantDetails(url.id);
      loading.classList.remove('show');
      loading.classList.add('hide');
      detailWrapper.innerHTML += restaurantDetails(data.restaurant);
      favBtn.innerHTML = createAddtoFavoriteButtonTemplate();

      // TODO: like functionality
      await FavFunctionality.init({
        favBtnContainer: document.querySelector('#favoriteButtonContainer'),
        data,
      });

      // TODO: form funcionality
      const submitBtn = document.querySelector('#submit-review-btn');
      const reviewName = document.querySelector('#review-name');
      const reviewText = document.querySelector('#review-text');

      submitBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log('clicked');
        await ReviewFunctionality(url, reviewName.value, reviewText.value);

        sendDataToWs({ name: reviewName.value, review: reviewText.value });
        reviewName.value = '';
        reviewText.value = '';
      });
    } catch (e) {
      console.log(e);
      loading.classList.remove('show');
      loading.classList.add('hide');
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Error: ${e.message}`,
      });
    }
  },
};

export default RestaurantDetails;
