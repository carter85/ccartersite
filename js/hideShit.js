function showDef() {
    var x = document.getElementById("bottomText");
    if (x.style.display === "grid") {
        x.style.display = "none";
    }
    else {
        x.style.display = "grid";
    }
}
function nextCard() {
    const randomElement = curd[Math.floor(Math.random() * curd.length)];
    document.getElementById("topText").innerHTML = randomElement.term;
    document.getElementById("bottomText").innerHTML = randomElement.def;
}
