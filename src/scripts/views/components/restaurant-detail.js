import CONFIG from '../../globals/config';

const restaurantDetail = (restaurant) => `
  <div id="detail-hero" style='background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url("${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}")'>
    <div class="detail-hero-content">
      <div id="favoriteBtn"></div>
      <h1 tabindex="0" class="detail-hero-content-title">${restaurant.name}</h1>
      <div class="detail-hero-content-add-rat">
      <p tabindex="0" class="detail-hero-content-address"><img src="/map-pinned.svg" />${restaurant.address}, ${restaurant.city}</p>
      <p aria-label="rating" tabindex="0" class="detail-hero-content-rating">
        <img src="/star.png" />
        <span tabindex="0">${restaurant.rating} Ratings</span>
      </p>
      </div>
      <p tabindex="0" class="detail-hero-content-description">${restaurant.description}</p>
      <div class="detail-hero-content-cat-fav">
        <div tabindex="0" aria-label="categories" class="detail-hero-content-categories">
          ${restaurant.categories.map((category) => `<span tabindex="0" class="category-item"><img src="/tally-1.svg"/>${category.name}</span>`).join('')}
        </div>
        <div id="favorite-container">Hello World</div>
      </div>
    </div>
  </div>

  <div id="food-menu" class="menu">
    <my-header-section title="Food Menu" align="left"></my-header-section>
    <div id="food-menu-wrapper" class="menu-wrapper">
     ${restaurant.menus.foods.map((menu) => `
      <article class="menu-item" tabindex="0">
        <p><img src="/salad.svg" />${menu.name}</p>
      </article>`).join('')}
    </div>
  </div>

  <div id="drink-menu" class="menu">
    <my-header-section title="Drink Menu" align="left"></my-header-section>
    <div id="drink-menu-wrapper" class="menu-wrapper">
     ${restaurant.menus.drinks.map((menu) => `
      <article class="menu-item" tabindex="0">
        <p><img src="/beer.svg" />${menu.name}</p>
      </article>`).join('')}
    </div>
  </div>


  <div id="review-root">
    <div id="reviews-list">
      <my-header-section title="All Reviews" align="left"></my-header-section>
      <div id="reviews-list-wrapper">
        ${restaurant.customerReviews.map((review) => `
          <article class="review-item" tabindex="0">
            <h4>${review.review}</h4>
            <p>${review.name}, ${review.date}</p>
          </article>`).join('')}
      </div>
    </div>
    <form id="review-post">
      <my-header-section title="Post Review" align="left"></my-header-section>
      <div id="review-post-wrapper">
        <label for="name-input">
          <span tabindex="0">Name</span>
          <input type="text" name="name-input" required id="name-input" placeholder="Your Name">
        </label>
        <label for="message-input">
          <span tabindex="0">Message</span>
          <textarea name="message-input" rows="10" required id="message-input" placeholder="Your message"></textarea>
        </label>
        <button type="submit" id="review-submit-btn">Send</button>
      </div>
    </form>
  </div>
`;

export default restaurantDetail;
