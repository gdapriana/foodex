export const createFavButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="fav-btn" class="fav-btn">
    <img src="/unfavorite.png"  alt="unfavorite icon"/>
  </button>
`;

export const createUnfavButtonTemplate = () => `
  <button aria-label="remove this restaurant from favorite" id="fav-btn" class="fav-btn">
    <img src="/favorite.png" alt="favorite icon"/>
  </button>
`;
