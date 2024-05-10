import FoodexSource from '../data/foodex-resource';

const postReview = async (url, name, message) => {
  const data = {
    id: url.id,
    name,
    review: message,
  };
  const reviewListContainer = document.querySelector('#reviews-list-wrapper');
  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const newReviewComponent = `
     <article class="review-item" tabindex="0">
        <h4>${message}</h4>
        <p>${name}, ${date}</p>
     </article>
  `;
  await FoodexSource.postRestaurantReview(data);
  reviewListContainer.innerHTML += newReviewComponent;
};

export default postReview;
