import CONFIG from '../../globals/config';

const restaurantDetails = (restaurant) => `
  <img tabindex="0" class="restaurant-details-image" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}"  alt="${restaurant.name} image"/>
  <div tabindex="0" class="restaurant-information">
    <div class="restaurant-information-1">
      <h1 tabindex="0" class="restaurant-information-title">${restaurant.name}</h1>
      <span tabindex="0" class="restaurant-information-address-city">${restaurant.address}, ${restaurant.city}</span>
    </div>
    <div class="restaurant-information-2">
      <span tabindex="0" class="restaurant-information-categories">
        Categories: ${restaurant.categories.map((category) => ` ${category.name}`)}
      </span>
      <span tabindex="0" class="restaurant-information-rating">
          Rating:
          <img src="/star.png" alt="rating star">
          ${restaurant.rating}
      </span>
    </div>
    <p tabindex="0" class="restaurant-information-desc">${restaurant.description}</p>
  </div>
  <div class="restaurant-menu-food menu-container">
    <custom-header title="Menu Food"></custom-header>
    <div class="food-wrapper menu-wrapper">
        ${restaurant.menus.foods.map((food) => `<article tabindex="0" class="menu-item">${food.name}</article>`).join('')}
    </div>
  </div>
  <div class="restaurant-menu-drink menu-container">
    <custom-header title="Menu Drink"></custom-header>
    <div class="drink-wrapper menu-wrapper">
       ${restaurant.menus.drinks.map((drink) => `<article tabindex="0" class="menu-item">${drink.name}</article>`).join('')}
    </div>
  </div>
  <div class="restaurant-review">
    <custom-header title="Reviews"></custom-header>
    <div class="reviews-wrapper">
      ${restaurant.customerReviews.map((review) => `
          <article tabindex="0" class="review-item">
             <p>${review.review}</p>
             <span>by ${review.name} on ${review.date}</span>
          </article>
        `).join('')}
    </div>
  </div>
`;

export default restaurantDetails;
