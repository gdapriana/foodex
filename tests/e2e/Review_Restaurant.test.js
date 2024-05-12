const assert = require('assert');

Feature('Review Restaurant');

Scenario('Post Restaurant Review', async ({ I }) => {
  const reviewTest = {
    name: 'gedeapriana',
    message: 'e2e test',
  };

  // page: /
  I.amOnPage('/');
  I.seeElement('.restaurant-card a');
  const cardLink = locate('.restaurant-card a').first();
  I.click(cardLink);

  // page: /#/restaurants/:id
  I.seeElement('form');
  I.fillField('#name-input', reviewTest.name);
  I.fillField('#message-input', reviewTest.message);
  I.click('#review-submit-btn');
  I.waitForResponse('https://restaurant-api.dicoding.dev/review');

  // matching
  const lastSubmitReview = locate('.review-item h4').last();
  const lastSubmitReviewMessage = await I.grabTextFrom(lastSubmitReview);
  assert.strictEqual(reviewTest.message, lastSubmitReviewMessage.trim());
});
