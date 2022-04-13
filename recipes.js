let recipes = [];

//factory function that returns an object
function createRecipe(name, mealType){
  return {
    name: name,
    mealType: mealType,
    mealResponse: function(){
      return `I will have ${this.name} for ${this.mealType}!`
    }
  }
}
let veganPancakes = createRecipe('Vegan Pancakes', 'Breakfast');
let overnightOats = createRecipe('Overnight Oats', 'Breakfast');
let veggieWrap = createRecipe('Veggie Wrap', 'Lunch');
let pasta = createRecipe('Broccoli Pesto Pasta', 'Dinner');
let salmon = createRecipe('Salmon', 'Dinner');
let macAndCheese = createRecipe('Mac and Cheese', 'Dinner');
let chickenStirFry = createRecipe('Chicken Stir Fry', 'Dinner');
let oreoCheesecakeBars = createRecipe('Oreo Cheesecake Bars', 'Dessert');
let oreoTruffles = createRecipe('Oreo Truffles', 'Dinner');

recipes.push(veganPancakes);
recipes.push(overnightOats);
recipes.push(veggieWrap);
recipes.push(pasta);
recipes.push(salmon);
recipes.push(macAndCheese);
recipes.push(chickenStirFry);
recipes.push(oreoCheesecakeBars);
recipes.push(oreoTruffles);

console.log(recipes);

function generateRandomRecipe(arrayOfRecipes){
  let numOfRecipes = arrayOfRecipes.length;
  let randomNum = Math.round(Math.random()* numOfRecipes);
  return arrayOfRecipes[randomNum].mealResponse();
}
console.log(generateRandomRecipe(recipes));


