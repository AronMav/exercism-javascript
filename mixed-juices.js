// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
 export function timeToMixJuice(name) {
    switch(name){
      case 'Pure Strawberry Joy':
        return 0.5;
      case 'Energizer':
        return 1.5;
      case 'Green Garden':  
        return 1.5;
      case 'Tropical Island':
        return 3;
      case 'All or Nothing':
        return 5;
      default:
        return 2.5;
    }
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    let n = 0;
    let count = 0;
    let lime = '';
    let i = 0;
    while(wedgesNeeded > n){
      if (i == limes.length || limes.length == 0){
        return count; 
      }
      lime = limes[i];
      i++;
      if (lime == 'small'){  
        n += 6;
        count++;
      }else if(lime == 'medium'){
        n += 8;
        count++;
      }else if(lime == 'large'){
        n += 10;
        count++;
      }
    }
    return count;
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    let i = 0;
    let time = 0;
    let array = [];
    let drink = '';
    while(time < timeLeft){
      if (i == orders.length || orders.length == 0){
        return array; 
      }    
      drink = orders[i];
      i++;
      time += timeToMixJuice(drink); 
    }
  
    if (i < orders.length){
      while(i < orders.length){
        array.push(orders[i]);   
        i++;
      }
    }
    return array;
  }
  