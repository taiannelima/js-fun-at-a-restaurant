function nameMenuItem(food) {
  return "Delicious " + food;
}
nameMenuItem("Delicious");

//var result = nameMenuItem("Pizza");
//console.log(result);

// A menuItem is a object with name, price and type
var MenuItem = {
  name : "",
  price : 0,
  type : ""  
};

function createMenuItem(menuItemName, price, type) {
  var menuItem = Object.create(MenuItem);
  menuItem.name = menuItemName;
  menuItem.price = price;
  menuItem.type = type;
 
  //var menuItem = {
  //  name: menuItemName,
  //  price: price,
  //  type: type
  //}

  return menuItem;
}

/**
 * Adds an ingredient to a list of ingredients
 * @param {string} ingredient  -  This is a string thats passed to the function, example - "Cheese" or "Pepper"
 * @param {Array} ingredients - This is an Array that will have the list of ingredients, example - ["Cheese", "Pepper"]
 */

function addIngredients(ingredient, ingredients) {

  // Iterates through the ingredients array and checks 
  // whether the items in the ingredients array has the ingredient
  for (let i = 0; i < ingredients.length; i++) {
    var item = ingredients[i];
    // Check if the ingredients array in that index of i has the ingredient
    if(item === ingredient) {
      // if it has the ingredient, then end function by returning
      return;
    }
  }
  // If the code gets here, it means that the ingredient is 
  // not in any of the elements in the ingredients array  

  // Add the ingredient to the ingredients array
  ingredients.push(ingredient);
}

function formatPrice(initialPrice) {
  return "$" + initialPrice;
}

function decreasePrice(itemPrice) {
    // decrease item price by 10%
    return itemPrice - (itemPrice * 10 / 100);
}

var Recipe = {
  title : "",
  ingredients: [],
  type: ""
}

function createRecipe(title, ingredients, menuItemType) {

  //var recipe = Object.create(Recipe);
  //recipe.title = title;
  //recipe.ingredients = ingredients;
  //recipe.type = menuItemType;

  var recipe = {
    title : title,
    ingredients: ingredients,
    type: menuItemType
  }
    
  return recipe;
}

var decreasedPrice = decreasePrice(10);
console.log(decreasedPrice);

//var menuItemObject = createMenuItem("Delicious French Toast", 10.99, "breakfast");
//console.log(menuItemObject.name);
//console.log(menuItemObject.price);
//console.log(menuItemObject.type);

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}