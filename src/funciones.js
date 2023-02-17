const who = ["The cat", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the printer", "the project"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was comming here"
];


const getRandomNumber = arrlength => Math.floor(Math.random()*arrlength);
const getRandomItem = arr => arr[(getRandomNumber * arr.length)];


//function getRandomItem(arr) {
  // get random index value
//const randomIndex = Math.floor(Math.random() * arr.length);
  // get random item
//return arr[randomIndex];
//}