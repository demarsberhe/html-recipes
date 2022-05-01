//recipes class

class Recipe{
  constructor(name, ingredients, healthLabels, image, mealType, url){
    this.name=name;
    this.ingredients=ingredients;
    this.healthLabels=healthLabels;
    this.image=image;
    this.mealType = mealType;
    this.url = url;
  }
  mealResponse(){
    if(this.name[this.name.length-1]==='s'){
      return `I will have ${this.name} for ${this.mealType}!`;
    } else{
      return`I will have a ${this.name} for ${this.mealType}!`;
    }
    
  }
}

//create recipe classes

const createRecipeClasses = data=>{
  
  let breakfast1 = new Recipe(data.breakfastData.hits[0].recipe.label,data.breakfastData.hits[0].recipe.ingredientLines,data.breakfastData.hits[0].recipe.healthLabels,data.breakfastData.hits[0].recipe.image, data.breakfastData.hits[0].recipe.mealType,data.breakfastData.hits[0].recipe.url);
  recipesFromAPI.push(breakfast1);

  let breakfast2 = new Recipe(data.breakfastData.hits[1].recipe.label,data.breakfastData.hits[1].recipe.ingredientLines,data.breakfastData.hits[1].recipe.healthLabels,data.breakfastData.hits[1].recipe.image, data.breakfastData.hits[1].recipe.mealType,data.breakfastData.hits[1].recipe.url);

  recipesFromAPI.push(breakfast2)

  let lunch1 = new Recipe(data.lunchData.hits[0].recipe.label,data.lunchData.hits[0].recipe.ingredientLines,data.lunchData.hits[0].recipe.healthLabels,data.lunchData.hits[0].recipe.image, data.lunchData.hits[0].recipe.mealType,data.lunchData.hits[0].recipe.url);
  recipesFromAPI.push(lunch1);

  let dinner1 = new Recipe(data.dinnerData.hits[0].recipe.label,data.dinnerData.hits[0].recipe.ingredientLines,data.dinnerData.hits[0].recipe.healthLabels,data.dinnerData.hits[0].recipe.image, data.dinnerData.hits[0].recipe.mealType,data.dinnerData.hits[0].recipe.url);
  recipesFromAPI.push(dinner1);

  let dinner2 = new Recipe(data.dinnerData.hits[1].recipe.label,data.dinnerData.hits[1].recipe.ingredientLines,data.dinnerData.hits[1].recipe.healthLabels,data.dinnerData.hits[1].recipe.image, data.dinnerData.hits[1].recipe.mealType,data.dinnerData.hits[1].recipe.url);
  recipesFromAPI.push(dinner2);

  let dinner3 = new Recipe(data.dinnerData.hits[2].recipe.label,data.dinnerData.hits[2].recipe.ingredientLines,data.dinnerData.hits[2].recipe.healthLabels,data.dinnerData.hits[2].recipe.image, data.dinnerData.hits[2].recipe.mealType,data.dinnerData.hits[2].recipe.url);
  recipesFromAPI.push(dinner3);

  let dinner4 = new Recipe(data.dinnerData.hits[3].recipe.label,data.dinnerData.hits[3].recipe.ingredientLines,data.dinnerData.hits[3].recipe.healthLabels,data.dinnerData.hits[3].recipe.image, data.dinnerData.hits[3].recipe.mealType,data.dinnerData.hits[3].recipe.url);
  recipesFromAPI.push(dinner4);

  let dinner5 = new Recipe(data.dinnerData.hits[4].recipe.label,data.dinnerData.hits[4].recipe.ingredientLines,data.dinnerData.hits[4].recipe.healthLabels,data.dinnerData.hits[4].recipe.image, data.dinnerData.hits[4].recipe.mealType,data.dinnerData.hits[4].recipe.url);
  recipesFromAPI.push(dinner5);
  console.log(recipesFromAPI);
  return recipesFromAPI;
  
}