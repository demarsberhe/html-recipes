let recipes = [];

//factory function that returns an object
function createRecipe(name, mealType, recipeId){
  return {
    name: name,
    mealType: mealType,
    recipeId: recipeId,
    mealResponse: function(){
      if(this.name[name.length-1]==='s' || this.name==='Salmon' || this.name==='Mac and Cheese'){
        return `I will have ${this.name} for ${this.mealType}!`;
      } else{
        return`I will have a ${this.name} for ${this.mealType}!`;
      }
      
    }
    
  }
}
// recipe objects 
let veganPancakes = createRecipe('Vegan Pancakes', 'Breakfast', 'vegan-pancakes-title');
let overnightOats = createRecipe('Overnight Oats', 'Breakfast', 'overnight-oats-title');
let veggieWrap = createRecipe('Veggie Wrap', 'Lunch', 'veggie-wrap');
let pasta = createRecipe('Broccoli Pesto Pasta', 'Dinner', 'pasta-title');
let salmon = createRecipe('Salmon', 'Dinner', 'salmon-title');
let macAndCheese = createRecipe('Mac and Cheese', 'Dinner', 'mac-and-cheese-title');
let chickenStirFry = createRecipe('Chicken Stir Fry', 'Dinner', 'chicken-stir-fry-title');
let oreoCheesecakeBars = createRecipe('Oreo Cheesecake Bars', 'Dessert', 'oreo-cheesecake-bars-title');
let oreoTruffles = createRecipe('Oreo Truffles', 'Dessert', 'oreo-truffles-title');

// individual recipe objects have been pushed to the recipes array
recipes.push(veganPancakes);
recipes.push(overnightOats);
recipes.push(veggieWrap);
recipes.push(pasta);
recipes.push(salmon);
recipes.push(macAndCheese);
recipes.push(chickenStirFry);
recipes.push(oreoCheesecakeBars);
recipes.push(oreoTruffles);


//function selects a random recipe from the array
function generateRandomRecipe(arrayOfRecipes){
  let numOfRecipes = arrayOfRecipes.length;
  let randomNum = Math.round(Math.random()* numOfRecipes);
  return arrayOfRecipes[randomNum];
}
//function returns the section link of the recipe based on meal type
function setLink(recipe){
  if(recipe.mealType === 'Breakfast'){
    document.getElementById('recipe-link').setAttribute('href', '#breakfast');
  } else if(recipe.mealType === 'Lunch'){
    document.getElementById('recipe-link').setAttribute('href', '#lunch');
  } else if(recipe.mealType === 'Dinner'){
    document.getElementById('recipe-link').setAttribute('href', '#dinner');
  } else if(recipe.mealType === 'Dessert'){
    document.getElementById('recipe-link').setAttribute('href', 'dessert.html');
  }
  
}

document.getElementById('recipe-button').addEventListener("click", function(){
  /*document.getElementsByTagName('figcaption').forEach(element =>{
    if(element.classList.includes('selected-border')){
      element.classList.remove('selected-border');
    }
  })*/
  let selectedRecipe = generateRandomRecipe(recipes);
  document.getElementById('recipe-selected').innerHTML = selectedRecipe.mealResponse(); //this updates the '...' text currently on the site with the randomly selected recipe
  document.getElementById('recipe-link').style.display = 'block'; // this displays the recipe link below the button
  setLink(selectedRecipe); //the href attribute of the 'Go to recipe!' will update with the corresponding link
  document.getElementById('recipe-link').addEventListener('click', function(){
    document.getElementById(`${selectedRecipe.recipeId}`).classList.add('selected-border'); // gray border is applied to the recipe selected by the generator
  })

})
