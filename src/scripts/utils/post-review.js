import FoodexSource from "../data/foodex-resource"

const postReview = async (url, name, message) => {
  const data = {
    id: url.id,
    name,
    review: message,
  }

  await FoodexSource.postRestaurantReview(data)
}

export default postReview