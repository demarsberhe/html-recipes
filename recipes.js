let recipes = [];

let recipesFromAPI =[];
//create new instances of recipe objects



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

//recipeId values for each recipe object
//const idValues = recipes.map(recipe=>{return recipe.recipeId});
//console.log(idValues);


//function selects a random recipe from the array
function generateRandomRecipe(arrayOfRecipes){
  let numOfRecipes = arrayOfRecipes.length;
  let randomNum = Math.round(Math.random()* numOfRecipes);
  return arrayOfRecipes[randomNum];
}
//function sets the href value for the 'Go to recipe!' text to the title of the randomly selected recipe
function setLink(recipe){
  if(recipe.mealType === "Dessert"){
    document.getElementById('recipe-link').setAttribute('href',`dessert.html#${recipe.recipeId}`);
    //console.log(recipe.recipeId.classList)
    //document.getElementById(`${recipe.recipeId}`).classList.add('selected-border'); 
  } else{
    document.getElementById('recipe-link').setAttribute('href', `#${recipe.recipeId}`);
    //document.getElementById(`${recipe.recipeId}`).classList.add('selected-border'); 
  }
  
}

document.getElementById('recipe-button').addEventListener("click", () =>{
  let selectedRecipe = generateRandomRecipe(recipes);
  document.getElementById('recipe-selected').innerHTML = selectedRecipe.mealResponse(); //this updates the '...' text currently on the site with the randomly selected recipe
  document.getElementById('recipe-link').style.display = 'block'; // this displays the recipe link below the button
  setLink(selectedRecipe); //the href attribute of the 'Go to recipe!' will update with the corresponding link
  document.getElementById('recipe-button').style.display = 'none';
  document.getElementById('try-again').style.display = 'inline';
  document.getElementById(`${selectedRecipe.recipeId}`).classList.add('selected-border'); // gray border is applied to the recipe selected by the generator
  //NOTE: this class is not being applied to recipes located on the dessert.html page
})

let accordionTitleElements = document.getElementsByClassName("accordion-title"); //populates array of objects of all accordion titles
for(let i=0; i< accordionTitleElements.length; i++){ //iterates through the array above
  accordionTitleElements[i].addEventListener("click",()=>{ // adds event listener to list for the action "click"
    accordionTitleElements[i].classList.toggle('active'); "this toggles the active class on or off depending on the current status"
  })
}


const updateRecipesUI = data=>{
  //update breakfast section
  const breakfast = data.breakfastData;

  //select two random recipes from the breakfast array
  let firstBreakfastRecipe = generateRandomRecipe(breakfast.hits);
  let secondBreakfastRecipe = generateRandomRecipe(breakfast.hits);
  
  
  console.log(breakfast);


}
