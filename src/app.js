/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuse();
  });
};

function excuse() {
  let who = ["Mi perro", "Mi madre", "Tu tatarabuelo", "Un pajarito"];
  let action = ["salió", "comió", "corrió", "terminó"];
  let what = ["afuera", "en el suelo", "en el pasto", "manzanas"];
  let when = [
    "despues del covid",
    "justo ahora",
    "ayer",
    "el otro dia",
    "hace un mes"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionInd = Math.floor(Math.random() * action.length);
  let whatInd = Math.floor(Math.random() * what.length);
  let whenInd = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] +
    " " +
    action[actionInd] +
    " " +
    what[whatInd] +
    " " +
    when[whenInd]
  );
}
