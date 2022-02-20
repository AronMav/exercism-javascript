//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (rna) => {
    let str = ''
    for (let i of rna) {
      if (i == 'G') {str += 'C'} else
      if (i == 'C') {str += 'G'} else
      if (i == 'T') {str += 'A'} else
      if (i == 'A') {str += 'U'}
    }
    return str
  };
  