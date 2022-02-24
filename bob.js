//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const Empty = message => !/\S/.test(message);
const Question = message => /\?\s*$/.test(message);
const Shout = message => /^[^a-z]*[A-Z][^a-z]*$/.test(message);
const QuestionAndShout = message => Question(message) && Shout(message);
const Other = () => true;

const RESPONSES = [
  [Empty, 'Fine. Be that way!'],
  [QuestionAndShout, 'Calm down, I know what I\'m doing!'],
  [Question, 'Sure.'],
  [Shout, 'Whoa, chill out!'],
  [Other, 'Whatever.']
];

export const hey = message => RESPONSES.find(check => check[0](message))[1];