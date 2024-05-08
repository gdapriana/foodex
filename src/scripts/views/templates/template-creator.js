export const createAddtoFavoriteButtonTemplate = () => `
  <button aria-label="add to favorite" id="fav-btn" class="fav-btn">
    <img src="/favorite.png" alt="favorite" aria-hidden="true">
  </button>
`;

export const createRemovefromFavoriteButtonTemplate = () => `
  <button aria-label="remove from favorite" id="fav-btn" class="fav-btn">
    <img src="/unfavorite.png" alt="unfavorite" aria-hidden="true">
  </button>
`;
