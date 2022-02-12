// @ts-check
/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
 export function seeingDouble(deck) {
    return deck.map((num) => num + num)
  }
  /**
   *  Creates triplicates of every 3 found in the deck.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with triplicate 3s
   */
  export function threeOfEachThree(deck) {
    return  deck.reduce((accum,value)=>{
      if (value == 3){
        accum.push(3)
        accum.push(3)
        accum.push(3)
      } else {
        accum.push(value)
      }
      return accum
    }, [])
  }
  /**
   * Extracts the middle two cards from a deck.
   * Assumes a deck is always 10 cards.
   *
   * @param {number[]} deck of 10 cards
   *
   * @returns {number[]} deck with only two middle cards
   */
  export function middleTwo(deck) {
    deck = deck.slice(deck.length/2 - 1, -(deck.length/2 - 1))
    console.log(deck)
    return deck
  }
  /**
   * Moves the outside two cards to the middle.
   *
   * @param {number[]} deck with even number of cards
   *
   * @returns {number[]} transformed deck
   */
  export function sandwichTrick(deck) {
    deck.splice(deck.length/2, 0, deck[deck.length - 1], deck[0]);
    deck = deck.slice(1, -1)
    return deck
  }
  /**
   * Removes every card from the deck except 2s.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with only 2s
   */
  export function twoIsSpecial(deck) {
    return deck.filter((card) => card === 2);
  }
  /**
   * Returns a perfectly order deck from lowest to highest.
   *
   * @param {number[]} deck shuffled deck
   *
   * @returns {number[]} ordered deck
   */
  export function perfectlyOrdered(deck) {
    deck.sort((a, b) => a - b);
    return deck
  }
  /**
   * Reorders the deck so that the top card ends up at the bottom.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} reordered deck
   */
  export function reorder(deck) {
    deck.reverse()
    return deck
  }