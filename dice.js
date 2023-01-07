let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

if (randomNumber1 === 1) {
  document.querySelector(".img1").setAttribute("src", "Alea_1.png");
} else if (randomNumber1 === 2) {
  document.querySelector(".img1").setAttribute("src", "Alea_2.png");
} else if (randomNumber1 === 3) {
  document.querySelector(".img1").setAttribute("src", "Alea_3.png");
} else if (randomNumber1 === 4) {
  document.querySelector(".img1").setAttribute("src", "Alea_4.png");
} else if (randomNumber1 === 5) {
  document.querySelector(".img1").setAttribute("src", "Alea_5.png");
} else if (randomNumber1 === 6) {
  document.querySelector(".img1").setAttribute("src", "Alea_6.png");
}

switch(randomNumber2) {
  case 1: document.querySelector(".img2").setAttribute("src", "Alea_1.png");
  break;
  case 2: document.querySelector(".img2").setAttribute("src", "Alea_2.png");
  break;
  case 3: document.querySelector(".img2").setAttribute("src", "Alea_3.png");
  break;
  case 4: document.querySelector(".img2").setAttribute("src", "Alea_4.png");
  break;
  case 5: document.querySelector(".img2").setAttribute("src", "Alea_5.png");
  break;     
  case 6: document.querySelector(".img2").setAttribute("src", "Alea_6.png");
  break;
}

if (randomNumber1 > randomNumber2) {
document.querySelector(".container  h1").innerText = " Player 1 wins!";

}

else if (randomNumber1 < randomNumber2) {
  document.querySelector(".container h1").innerText = "Player 2 wins! ";
}

  else document.querySelector(".container h1").innerText = "Draw!";
