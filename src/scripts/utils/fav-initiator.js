import Swal from 'sweetalert2';
import FavoriteRestaurantIdb from '../data/favorite-resource';
import { createFavButtonTemplate, createUnfavButtonTemplate } from '../views/components/fav-btn';
import { feedbackSuccess } from './swal-feedback';

const FavBtnInitiator = {
  async init({ favBtnContainer, restaurant }) {
    this._favBtnContainer = favBtnContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this._renderUnfav();
    } else {
      this._renderFav();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderFav() {
    this._favBtnContainer.innerHTML = createFavButtonTemplate();
    const favBtn = document.querySelector('#fav-btn');
    favBtn.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      await Swal.fire(feedbackSuccess(`Successfuly add ${this._restaurant.name} to favorite`));
      await this._renderButton();
    });
  },

  _renderUnfav() {
    this._favBtnContainer.innerHTML = createUnfavButtonTemplate();
    const favBtn = document.querySelector('#fav-btn');
    favBtn.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      await Swal.fire(feedbackSuccess(`Successfuly remove ${this._restaurant.name} from favorite`));
      await this._renderButton();
    });
  },
};

export default FavBtnInitiator;
