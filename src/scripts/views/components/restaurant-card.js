import CONFIG from '../../globals/config';

const restaurantCard = (restaurant) => `
  <article tabindex="0" class="restaurant-card">
    <img class="restaurant-image lazyload" crossorigin="anonymous" src="/images/slug-img.png" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name} image">
    <span tabindex="0" class="restaurant-rating">
        <img class="restaurant-rating-logo" src="/images/star.png" alt="rating">
        ${restaurant.rating} Ratings
    </span>
    <h3 tabindex="0" class="restaurant-title">
        ${restaurant.name}, ${restaurant.city}
    </h3>
    <p class="restaurant-desc" tabindex="0">${restaurant.description}</p>
    <a class="restaurant-details-link" tabindex="0" href="#/restaurants/${restaurant.id}">Details</a>
  </article>

`;

export default restaurantCard;
