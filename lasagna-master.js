/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
 export function cookingStatus(time) {
    if (time == 0){
      return 'Lasagna is done.'
    } else if(typeof time == 'number'){
      return 'Not done, please wait.'
    } else {
      return 'You forgot to set the timer.'
    }
  }
  
  export function preparationTime(layers, time = 2) {
    return layers.length * time
  }
  
  export function quantities(fewLayers) {
    let noodSauce= {'noodles': 0, 'sauce': 0} 
    for (let layer of fewLayers) {
       if (layer == 'noodles'){
         noodSauce.noodles += 50 
       }
       if (layer == 'sauce'){
         noodSauce.sauce += 0.2 
       }
     }
    return noodSauce
  }
  
  export function addSecretIngredient(friendsList, myList) {
    if (friendsList[friendsList.length-1] != myList[myList.length-1]){
      myList.push(friendsList[friendsList.length-1])
    }
  }
  
  export function scaleRecipe(recipe, person = 1) {
    let recipe2 = {}
    for (let key of Object.keys(recipe)){
      recipe2[key] = recipe[key] / 2 * person
    }
    return recipe2
  }  