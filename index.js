const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newTutorials = map(tutorials, properSentence);
  return newTutorials;
}

function map(array, modifier) {
  const newArr = [];
  for (const element of array) {
    newArr.push(modifier(element));
  }
  return newArr;
} 

function properSentence(sentence) {
  let newSentence = "";
  for (let i = 0; i < sentence.length; i++) {
    if (i === 0) {
      newSentence += sentence.charAt(i).toUpperCase();
      } else {
        if (sentence.charAt(i - 1) === " ") {
          newSentence += sentence.charAt(i).toUpperCase();
        } else {
          newSentence += sentence.charAt(i);
        }
      }
  }
  return newSentence;
}