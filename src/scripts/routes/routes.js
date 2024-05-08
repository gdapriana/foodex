import RestaurantsList from '../views/pages/restaurants-list';
import RestaurantFavorites from '../views/pages/restaurant-favorites';
import RestaurantDetails from '../views/pages/restaurant-details';

const routes = {
  '/': RestaurantsList,
  '/restaurants-list': RestaurantsList,
  '/favorites': RestaurantFavorites,
  '/restaurant/:id': RestaurantDetails,
};

export default routes;
