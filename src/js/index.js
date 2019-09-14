/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

var numcarta = Math.floor(Math.random() * 12) + 0;

function raimag() {
  var imagarray = [];
  imagarray[0] = "&spades"; //espadas
  imagarray[1] = "&clubs"; //trebol
  imagarray[2] = "&hearts"; //Corazones
  imagarray[3] = "&diams"; //diamantes
  var i = Math.floor(Math.random() * 3) + 0;
  return imagarray[i];
}

window.onload = function() {
  // alert(raimag());

  document.getElementById("pinta-top").innerHTML = raimag();
  document.getElementById("numero").innerHTML = numcarta;
  document-getElementById("pinta-down").innerHTML = raimag();
};
