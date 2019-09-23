/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

function raimag() {
  var imagarray = [];
  imagarray[0] = "&spades;"; //espadas
  imagarray[1] = "&clubs;"; //trebol
  imagarray[2] = "&hearts;"; //Corazones
  imagarray[3] = "&diams;"; //diamantes
  var i = Math.floor(Math.random() * 4);
  return imagarray[i];
}

window.onload = function() {
  var imagrandom = new String(raimag());
  var numcarta = Math.floor(Math.random() * 13);

  if (imagrandom == "&hearts;" || imagrandom == "&diams;") {
    document.getElementById("card").innerHTML =
      '<div id="pinta-topred"></div><div id="numero"></div><div id="pinta-downred"></div>';

    document.getElementById("pinta-topred").innerHTML = imagrandom.valueOf();
    document.getElementById("numero").innerHTML = numcarta;
    document.getElementById("pinta-downred").innerHTML = imagrandom.valueOf();
  } else {
    document.getElementById("card").innerHTML =
      '<div id="pinta-top"></div><div id="numero"></div><div id="pinta-down"></div>';

    document.getElementById("pinta-top").innerHTML = imagrandom.valueOf();
    document.getElementById("numero").innerHTML = numcarta;
    document.getElementById("pinta-down").innerHTML = imagrandom.valueOf();
  }
};
