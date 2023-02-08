/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
window.onload = function() {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    return (item = arr[randomIndex]);
  }

  function generateExcuse() {
    let whoRandom = getRandomItem(who);
    let actionRandom = getRandomItem(action);
    let whatRandom = getRandomItem(what);
    let whenRandom = getRandomItem(when);
    let excuse =
      whoRandom + " " + actionRandom + " " + whatRandom + " " + whenRandom;
    //alert excuse;
    document.getElementById("RandomTextHere").innerHTML = excuse;
  }
};
