
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* what was I using this script to change? language and tools grid classes? */
function myFunction() {
  var x = document.getElementById("languages tools");
  if (x.className === "offset-by-two three columns knowledge genericContainer") {
    x.className = "genericContainer";
  } else {
    x.className = "offset-by-two three columns knowledge genericContainer";
  }
}