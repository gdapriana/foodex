## Scenario List

### Liked the Restaurant.

1. [x] The restaurant has not been liked.
2. [x] The widget for liking a restaurant is displayed. 
3. [x] The restaurant liking widget is pressed by the user.
4. [x] The restaurant is added to the list of liked restaurants.
    * [x] The restaurant was added successfully. 
    * [x] It turns out that the restaurant has already been liked. 
      * There is no need to save again. 
    * [ ] restaurant data has no ID. 
      * The system does not process the save. 
      * The system did not fail.

### Cancel Favoriting a restaurant.
1. [x] The restaurant has already been liked. 
2. [x] The widget to cancel liking a restaurant is displayed. 
3. [x] The cancellation widget was pressed by the user. 
4. [x] The restaurant is removed from the list of liked restaurants. 
   * The restaurant was successfully deleted.
   * It turns out that the restaurant is not in the list of liked restaurants.

## TODO's
1. `SOLVED` Negative flow: the system does not process the save and causes a failure if saving a movie without an ID.