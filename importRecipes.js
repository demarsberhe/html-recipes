
//this file imports recipes using the edamam api
const base = 'https://api.edamam.com/api/recipes/v2';
const key = '7189fab8099be9dcba5bbda3d159cf3c';
const id = 'ea385ccc';

const getRecipes = async ()=>{
  //request breakfast data
  let breakfastQuery = `${base}?type=public&q=breakfast&mealType=breakfast&app_id=${id}&app_key=${key}`;
  let breakfastResponse = await fetch(breakfastQuery);
  let breakfastData = await breakfastResponse.json();
  //request lunch data
  let lunchQuery = `${base}?type=public&q=lunch&mealType=lunch&app_id=${id}&app_key=${key}`;
  let lunchResponse = await fetch(lunchQuery);
  let lunchData = await lunchResponse.json();
  //request dinner data
  let dinnerQuery = `${base}?type=public&q=dinner&mealType=dinner&app_id=${id}&app_key=${key}`;
  let dinnerResponse = await fetch(dinnerQuery);
  let dinnerData = await dinnerResponse.json();
  return {
    breakfastData: breakfastData,
    lunchData: lunchData,
    dinnerData: dinnerData
  };
}

getRecipes()
.then(data=>{
  console.log(data);
  createRecipeClasses(data);
  updateRecipesUI(data);
})
.catch(err=>{
  console.log(err);
});

