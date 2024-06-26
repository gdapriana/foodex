import Swal from 'sweetalert2';
import UrlParser from '../../routes/url-parser';
import { feedbackError } from '../../utils/swal-feedback';
import FoodexSource from '../../data/foodex-resource';
import restaurantDetail from '../components/restaurant-detail';
import postReview from '../../utils/post-review';
import FavBtnInitiator from '../../utils/fav-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail-root"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loader = document.querySelector('#loader');
    const detailRoot = document.querySelector('#detail-root');

    loader.classList.toggle('show');
    try {
      const { restaurant } = await FoodexSource.getRestaurantDetails(url.id);
      detailRoot.innerHTML = restaurantDetail(restaurant);

      const submitReviewForm = document.querySelector('#review-post');
      const reviewName = document.querySelector('#name-input');
      const reviewMessage = document.querySelector('#message-input');

      submitReviewForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await postReview(url, reviewName.value, reviewMessage.value);
        reviewName.value = '';
        reviewMessage.value = '';
      });

      await FavBtnInitiator.init({
        favBtnContainer: document.querySelector('#favorite-container'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          rating: restaurant.rating,
          pictureId: restaurant.pictureId,
          description: restaurant.description,
          city: restaurant.city,
        },
      });

      loader.classList.toggle('show');
    } catch (e) {
      loader.classList.toggle('show');
      await Swal.fire(feedbackError(e.message));
    }
  },
};

export default Detail;
