function createRestaurant(restaurantName) {
  var menus = {
    breakfast: [],
    lunch: [],
    dinner: []
  }
  var restaurant = {
    name : restaurantName,
    menus : menus
  }
  return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  if(menuItem.type == "lunch") {
    for(var i=0; i<restaurant.menus.lunch.length; i++) {
      if(restaurant.menus.lunch[i].name === menuItem.name) {
        return restaurant;
      }
    }
    restaurant.menus.lunch.push(menuItem);
  }
  else if(menuItem.type == "breakfast") {
    for(var i=0; i<restaurant.menus.breakfast.length; i++) {
      if(restaurant.menus.breakfast[i].name === menuItem.name) {
        return restaurant;
      }
    }

    restaurant.menus.breakfast.push(menuItem);
  }
  if(menuItem.type == "dinner") {
    for(var i=0; i<restaurant.menus.dinner.length; i++) {
      if(restaurant.menus.dinner[i].name === menuItem.name) {
        return restaurant;
      }
    }

    restaurant.menus.dinner.push(menuItem);
  }

  return restaurant; 
}

function removeMenuItem(restaurant, menuItemName, type) {
  if(type == "lunch") {
    for(var i=0; i<restaurant.menus.lunch.length; i++) {
      if(restaurant.menus.lunch[i].name === menuItemName) {
        restaurant.menus.lunch.splice(i, 1);
        return "No one is eating our " + menuItemName + " - it has been removed from the lunch menu!"
      }
    }
  }
  else if(type == "breakfast") {
    for(var i=0; i<restaurant.menus.breakfast.length; i++) {
      if(restaurant.menus.breakfast[i].name === menuItemName) {
        restaurant.menus.breakfast.splice(i, 1);
        return "No one is eating our " + menuItemName + " - it has been removed from the breakfast menu!"
      }
    }
  }
  else if(type === "dinner") {
    for(var i=0; i<restaurant.menus.dinner.length; i++) {
      if(restaurant.menus.dinner[i].name === menuItemName) {
        restaurant.menus.dinner.splice(i, 1);
        return "No one is eating our " + menuItemName + " - it has been removed from the dinner menu!"
      }
    }
  }

  return "Sorry, we don't sell "+ menuItemName + ", try adding a new recipe!";
}

function checkForFood(restaurant, foodItem) {
    for(var i=0; i<restaurant.menus.lunch.length; i++) {
      if(restaurant.menus.lunch[i].name === foodItem.name) {
        return "Yes, we're serving " + foodItem.name + " today!";
      }
    }
    for(var i=0; i<restaurant.menus.breakfast.length; i++) {
      if(restaurant.menus.breakfast[i].name === foodItem.name) {
        return "Yes, we're serving " + foodItem.name + " today!";
      }
    }
    for(var i=0; i<restaurant.menus.dinner.length; i++) {
      if(restaurant.menus.dinner[i].name === foodItem.name) {
        return "Yes, we're serving " + foodItem.name + " today!";
      }
    }

  return "Sorry, we aren't serving " + foodItem.name + " today.";
  

}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}

module.exports = {
   createRestaurant, 
   addMenuItem,
   removeMenuItem,
   checkForFood
}