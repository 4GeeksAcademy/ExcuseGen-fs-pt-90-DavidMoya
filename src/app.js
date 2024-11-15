/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");

  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  const getRandomElemnt = listElements => {
    let element = "";
    element = listElements[Math.floor(Math.random() * listElements.length)];
    return element;
  };
  let excuseGen = document.querySelector("#excuse");
  console.log(excuseGen);
  excuseGen.innerHTML =
    getRandomElemnt(who) +
    " " +
    getRandomElemnt(action) +
    " " +
    getRandomElemnt(what) +
    " " +
    getRandomElemnt(when);
};
