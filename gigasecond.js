//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  return new Date((Math.floor(date)/1000 + 1000000000)*1000)
}