/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

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

const getRandomNumber = arrlength => Math.floor(Math.random() * arrlength);
const getRandomItem = arr => arr[getRandomNumber(arr.length)];
window["getExcuse"] = () => {
  const whoRandom = getRandomItem(who);
  const actionRandom = getRandomItem(action);
  const whatRandom = getRandomItem(what);
  const whenRandom = getRandomItem(when);
  const excuse = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`;

  document.getElementById("RandomTextHere").innerHTML = excuse;
};
