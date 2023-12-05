// Add image change on click and change message
const myImage = document.querySelector("img");
const myTheme = document.querySelector("html");
let mySubHeading = document.querySelector("h2");
let foundEasterEgg = false;

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  const myClass = myTheme.getAttribute("class");

  // Change the picture
  if (mySrc === "images/gundam.jpg") {
    myImage.setAttribute("src", "images/baby-yoda-2.jpg");
  } else if (mySrc === "images/baby-yoda-2.jpg") {
    myImage.setAttribute("src", "images/baby-yoda.jpeg");
  } else {
    myImage.setAttribute("src", "images/gundam.jpg");
  }

  // Change the theme
  if (myClass === "theme1"){
    myTheme.setAttribute("class", "theme2");
  } else {
    myTheme.setAttribute("class", "theme1");
  }

  // Change message for Easter Egg
  if (!foundEasterEgg) {
    mySubHeading.textContent = `You found the easter egg! What happens if you click again?`;
    foundEasterEgg = true;
  } else {
    mySubHeading.textContent = `You found the easter egg again!`;
  }
};

// Change the heading functionality
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName){
    alert("Invalid name");
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hi ${myName} do you like Nike and Baby Yoda?`;
  }
}

if (localStorage.getItem("name")) {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `${storedName} likes Nike and Baby Yoda!`;
}

myButton.onclick = () => {
  setUserName();
}
