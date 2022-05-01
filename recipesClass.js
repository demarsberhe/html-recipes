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