// Add image change on click and change message
const myImage = document.querySelector("img");
const myTheme = document.querySelector("html");
let mySubHeading = document.querySelector("h2");
let foundEasterEgg = false;

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  const myClass = myTheme.getAttribute("class");


  // Change the picture
  if (mySrc === "images/spot-tower-photoshoot.jpeg") {
    myImage.setAttribute("src", "images/baby-yoda-2.jpg");
    document.getElementById("figcap").textContent = `Baby Yoda is awesome!`;
  } else if (mySrc === "images/baby-yoda-2.jpg") {
    myImage.setAttribute("src", "images/gundam.jpg");
    document.getElementById("figcap").textContent = `Gundam is also super cool!`;
  } else {
    myImage.setAttribute("src", "images/spot-tower-photoshoot.jpeg");
    document.getElementById("figcap").textContent = `Steven is wearing orange :)`;
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
    sessionStorage.setItem("name", myName);
    myHeading.textContent = `Hi ${myName} do you like Nike and Baby Yoda?`;
    document.getElementById("easteregg").hidden=false;
  }
}

if (sessionStorage.getItem("name")) {
  const storedName = sessionStorage.getItem("name");
  myHeading.textContent = `Welcome back ${storedName}!`;
}

myButton.onclick = () => {
  setUserName();
}
