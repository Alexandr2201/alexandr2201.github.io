var myImage = document.querySelector("img");
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fura.jpg") {
    myImage.setAttribute("src", "images/fura1.jpg");
  } 
  else {
    myImage.setAttribute("src", "images/fura.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "SmartBox лучший!, " + myName;
}

if (!localStorage.getItem("name")) {
    setUserName();
  } 
  else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "SmartBox лучший!, " + storedName;
}

myButton.onclick = function () {
    setUserName();
};