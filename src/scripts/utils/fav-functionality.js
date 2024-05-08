import Swal from 'sweetalert2';
import FavoriteRestaurants from '../data/favorite-restaurants';
import { createAddtoFavoriteButtonTemplate, createRemovefromFavoriteButtonTemplate } from '../views/templates/template-creator';

const FavFunctionality = {
  async init({ favBtnContainer, data }) {
    this._favBtnContainer = favBtnContainer;
    this._restaurant = data.restaurant;
    await this._renderBtn();
  },

  async _renderBtn() {
    try {
      const { id } = this._restaurant;

      const restaurant = await FavoriteRestaurants.getRestaurant(id);
      if (restaurant) this._renderFavoritedBtnTemplate();
      else this._renderFavoriteBtnTemplate();
    } catch (e) {
      console.log(e);
      await Swal.fire({
        title: 'Error',
        text: e.message,
        icon: 'error',
      });
      throw new Error(e);
    }
  },

  _renderFavoriteBtnTemplate() {
    this._favBtnContainer.innerHTML = createAddtoFavoriteButtonTemplate();
    const favBtn = document.querySelector('#favoriteButtonContainer');

    favBtn.addEventListener('click', async () => {
      await FavoriteRestaurants.putRestaurant(this._restaurant);
      await Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Success add restaurant to favorite',
      });
      await this._renderBtn();
    });
  },
  _renderFavoritedBtnTemplate() {
    this._favBtnContainer.innerHTML = createRemovefromFavoriteButtonTemplate();
    const favBtn = document.querySelector('#favoriteButtonContainer');
    favBtn.addEventListener('click', async () => {
      await FavoriteRestaurants.deleteRestaurant(this._restaurant.id);
      await Swal.fire({
        title: 'Success',
        text: 'Unfavorited!',
        icon: 'success',
      });
      await this._renderBtn();
    });
  },
};

export default FavFunctionality;
