//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (number) => {
  let mainArray = []
  for (let length = 0; length < number; length++) {
    let array = []
    for (let index = 0; index < length + 1; index++) {
      if (length + 1 == 1) {
        array.push(1)
        continue
      }
      let num1 = index > mainArray[length - 1].length - 1 ? 0 : mainArray[length - 1][index]
      let num2 = index - 1 < 0 ? 0 : mainArray[length - 1][index - 1]
      let num = num1 + num2
      array.push(num)
    }
    mainArray.push(array)
  }
  console.log(mainArray)
  return mainArray
};
