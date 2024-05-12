import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': Home,
  '/restaurants': Home,
  '/home': Home,
  '/favorites': Favorite,
  '/restaurants/:id': Detail,
};

export default routes;
