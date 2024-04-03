export const foodCard = (food) => {
  const wrapper = document.createElement('article');
  wrapper.setAttribute('tabindex', '0');
  wrapper.classList.add('restaurant-card');

  const cardImage = document.createElement('div');
  const restaurantLocation = document.createElement('span');
  const foodImage = document.createElement('img');
  cardImage.classList.add('restaurant-card-image');
  restaurantLocation.classList.add('restaurant-location');
  restaurantLocation.innerHTML = food.city;
  restaurantLocation.setAttribute('tabindex', '0');
  foodImage.setAttribute('src', food.pictureId);
  foodImage.setAttribute('alt', `${food.name} image`);
  cardImage.append(restaurantLocation, foodImage);

  const cardDesc = document.createElement('div');
  cardDesc.classList.add('restaurant-card-desc');
  const restaurantFoodRating = document.createElement('span');
  const foodRatingImage = document.createElement('img');

  restaurantFoodRating.classList.add('restaurant-food-rating');
  restaurantFoodRating.innerHTML = `Rating: ${food.rating}`;
  restaurantFoodRating.setAttribute('tabindex', '0');
  foodRatingImage.setAttribute('src', '/images/star.png');
  foodRatingImage.setAttribute('alt', 'rating');
  restaurantFoodRating.append(foodRatingImage);

  const restaurantFoodName = document.createElement('h2');
  restaurantFoodName.classList.add('restaurant-food-name');
  restaurantFoodName.setAttribute('tabindex', '0');
  restaurantFoodName.innerHTML = food.name;
  const restaurantFoodDesc = document.createElement('p');
  restaurantFoodDesc.classList.add('restaurant-food-desc');
  restaurantFoodDesc.setAttribute('tabindex', '0');
  restaurantFoodDesc.innerHTML = food.description;
  cardDesc.append(restaurantFoodRating, restaurantFoodName, restaurantFoodDesc);
  wrapper.append(cardImage, cardDesc);
  return wrapper;
};
