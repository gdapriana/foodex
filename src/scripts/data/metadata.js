export const metadata = {
  app: 'foodex',
  description:
    'Explore a comprehensive platform designed to help you discover and locate delicious food options across Indonesia.',
  logo: '/logo.png',
};

export const routes = [
  { title: 'Home', route: '#/restaurants-list', target_blank: false },
  { title: 'Favorite', route: '#/favorites', target_blank: false },
  {
    title: 'About Us',
    route: 'https://gedeapriana.vercel.app',
    target_blank: true,
  },
];
