import FoodexSource from '../data/foodex-source';

const ReviewFunctionality = async (url, name, review) => {
  const inputData = {
    id: url.id,
    name,
    review,
  };

  const reviewsWrapper = document.querySelector('.reviews-wrapper');
  const date = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const newReviewComponent = `
      <article class="review-item">
         <p>${review}</p>
         <span>by ${name} on ${date}</span>
      </article>
  `;

  await FoodexSource.postRestaurantReview(inputData);
  reviewsWrapper.innerHTML += newReviewComponent;
};

export default ReviewFunctionality;
