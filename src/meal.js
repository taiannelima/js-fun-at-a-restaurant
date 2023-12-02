function nameMenuItem(food) {
  return "Delicious " + food;
}
nameMenuItem("Delicious");



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
 

  return menuItem;
}



function addIngredients(ingredient, ingredients) {

  
  for (let i = 0; i < ingredients.length; i++) {
    var item = ingredients[i];
    
    if(item === ingredient) {
      return;
    }
  }
  
  ingredients.push(ingredient);
}

function formatPrice(initialPrice) {
  return "$" + initialPrice;
}

function decreasePrice(itemPrice) {
   
    return itemPrice - (itemPrice * 10 / 100);
}

var Recipe = {
  title : "",
  ingredients: [],
  type: ""
}

function createRecipe(title, ingredients, menuItemType) {



  var recipe = {
    title : title,
    ingredients: ingredients,
    type: menuItemType
  }
    
  return recipe;
}

var decreasedPrice = decreasePrice(10);
console.log(decreasedPrice);


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}