import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class FoodexSource {
  static async getRestaurantsList() {
    const response = await fetch(API_ENDPOINT.LIST);
    return response.json();
  }

  static async getRestaurantDetails(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postRestaurantReview(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default FoodexSource;
