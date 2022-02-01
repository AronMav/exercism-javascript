// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
 export function cardTypeCheck(stack, card) {
    let num = 0
    for (const c of stack){
      if (c == card){
        num+=1
      }
    }
    return num
  }
  
  /**
   * Determine how many cards are odd or even
   *
   * @param {number[]} stack
   * @param {boolean} type the type of value to check for - odd or even
   * @returns {number} number of cards that are either odd or even (depending on `type`)
   */
  export function determineOddEvenCards(stack, type) {
    let sum = 0
    if (type){stack.forEach((number, index) => number%2==0 ? sum+=1 : 0)} 
    else stack.forEach((number, index) => number%2==1 ? sum+=1 : 0)
    return sum
  }
  