import { foodCard } from '../components/food-card';

const GET_FOOD = async () => {
  try {
    const response = await fetch('/data/DATA.json');
    return await response.json();
  } catch (err) {
    alert(err);
  }
};

export const loadFoods = async () => {
  const foods = await GET_FOOD();
  const foodWrapper = document.querySelector('#restaurant-list-wrapper');
  foodWrapper.innerHTML = '';

  for (const food of foods.restaurants) {
    const card = foodCard(food);
    foodWrapper.append(card);
  }
};
