//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const cost = (books) => {

  if (books.length == 0) return 0

  let booksCount = books.reduce((allBooks, bookName) => {
    allBooks[bookName - 1] += 1;
    return allBooks;
  }, [0, 0, 0, 0, 0])

  booksCount.sort().reverse()
  let maxBads = books[0];
  let bags = new Array(maxBads)
  for (let numberOfBooks of booksCount) {
    if (numberOfBooks == 0) continue;
    let places = [0, 0, 0, 0, 0]
    for (let index = 0; index < numberOfBooks; index++) {
      if (bags[index] == undefined) {
        bags[index] = 1
      } else {
        // Cost Balancer
        let minPlace = 0
        let minCost = Infinity
        for (let id = 0; id < 5; id++) {
          if (places[id] == 1 || bags[id] == undefined) continue
          bags[id] += 1
          if (minCost > sum(bags)) {
            minCost = sum(bags)
            minPlace = id
          }
          bags[id] -= 1
        }
        bags[minPlace] += 1
        places[minPlace] += 1
      }
    }
  }
  console.log(bags)
  return sum(bags)
}

const sum = (bags) => {
  const COST = 800
  const DISCOUNT = { 1: 0, 2: 5, 3: 10, 4: 20, 5: 25 }
  let sum = 0
  for (let amount of bags) {
    sum += COST * amount - (COST * amount * DISCOUNT[amount] / 100)
  }
  return sum
}