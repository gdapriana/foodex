import { categoryCard } from '../components/category-card';

const GET_CATEGORIES = async () => {
  try {
    const response = await fetch('/data/DATA.json');
    return await response.json();
  } catch (err) {
    alert(err);
  }
};

export const loadCategories = async () => {
  const categories = await GET_CATEGORIES();
  const categoriesWrapper = document.querySelector('#categories-list-wrapper');
  categoriesWrapper.innerHTML = '';

  for (const category of categories.categories) {
    const card = categoryCard(category);
    categoriesWrapper.append(card);
  }
};
