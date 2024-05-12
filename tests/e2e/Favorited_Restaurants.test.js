const assert = require('assert');

Feature('Favorited Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('Showing Empty Favorited Restaurants', ({ I }) => {
  I.see('No Restaurants Favorited', '#favorite-root');
});

Scenario('favorited one restaurant', async ({ I }) => {
  I.see('No Restaurants Favorited', '#favorite-root');

  // page: /
  I.amOnPage('/');
  I.seeElement('.restaurant-card a');

  const cardLink = locate('.restaurant-card a').first();
  const firstCardContainer = locate('.restaurant-title').first();
  const unfavoritedTitle = await I.grabTextFrom(firstCardContainer);
  I.click(cardLink);

  // page: /#/restaurants/:id
  I.seeElement('#fav-btn');
  I.click('#fav-btn');
  I.click('.swal2-confirm');

  // page: /#/favorites
  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-card');
  const favoritedTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(unfavoritedTitle, favoritedTitle);
});

Scenario('unfavorited one restaurant', async ({ I }) => {
  I.see('No Restaurants Favorited', '#favorite-root');

  // page: /
  I.amOnPage('/');
  I.seeElement('.restaurant-card a');

  const cardLink = locate('.restaurant-card a').first();
  const firstCardContainer = locate('.restaurant-title').first();
  const unfavoritedTitle = await I.grabTextFrom(firstCardContainer);
  I.click(cardLink);

  // page: /#/restaurants/:id
  I.seeElement('#fav-btn');
  I.click('#fav-btn');
  I.click('.swal2-confirm');

  // page: /#/favorites
  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-card');
  const favoritedTitle = await I.grabTextFrom('.restaurant-title');
  assert.strictEqual(unfavoritedTitle, favoritedTitle);
  const favoritedCardLink = locate('.restaurant-card a').first();
  I.click(favoritedCardLink);

  // page: /#/restaurants/:id
  I.seeElement('#fav-btn');
  I.click('#fav-btn');
  I.click('.swal2-confirm');

  // page: /#/favorites
  I.amOnPage('/#/favorites');
  I.see('No Restaurants Favorited', '#favorite-root');
});
