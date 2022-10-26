let player = document.querySelector("img#player"),
  gem = document.querySelector("#gem"),
  topp = +getComputedStyle(player).top.split("px")[0] - 1,
  lefft = +getComputedStyle(player).left.split("px")[0] - 1,
  extra_clone = gem.cloneNode(true),
  diamondL,
  cont,
  aleert = document.querySelector(".alert"),
  diamondT,
  score = 0,
  controlls = document.querySelectorAll(".alert div p"),
  scoreC = document.querySelector("p span");
extra_clone.classList.add("clone1");
controlls[1].onclick = () => {
  document.onkeydown = (e) => {
    if (e.key == "ArrowDown" && topp <= document.body.offsetHeight) {
      e.preventDefault();
      topp += 10;
      player.style.top = `${topp}px`;
    } else if (e.key == "ArrowUp" && topp >= 0) {
      e.preventDefault();
      topp -= 10;
      player.style.top = `${topp}px`;
    } else if (e.key == "ArrowLeft" && lefft > 0) {
      e.preventDefault();
      lefft -= 10;
      player.style.left = `${lefft}px`;
    } else if (
      e.key == "ArrowRight" &&
      lefft < document.body.offsetWidth - 120
    ) {
      e.preventDefault();
      lefft += 10;
      player.style.left = `${lefft}px`;
    }
    gems();
  };
  aleert.style.display = "none";
};
controlls[0].onclick = () => {
  aleert.style.display = "none";
  console.log("mouse active");
  onmousemove = (e) => {
    document.body.style.cursor = "none";
    player.style.left = `${e.clientX - 50}px`;
    player.style.top = `${e.clientY - 50}px`;
    gemsM();
  };
};

window.onload = () => {
  diamondL = Math.floor(Math.random() * (document.body.offsetWidth - 100));
  diamondT = Math.floor(
    Math.random() * (document.body.offsetHeight - 145) + 145
  );
  gem.style.top = diamondT + "px";
  gem.style.left = diamondL + "px";
  aleert.style.display = "block";
};
function gems() {
  if (
    topp >= diamondT &&
    topp <= diamondT + 100 &&
    lefft - 10 >= diamondL &&
    lefft - 10 <= diamondL + 50
  ) {
    diamondL = Math.floor(
      Math.min(
        Math.random() * document.body.offsetWidth,
        Math.random() * document.body.offsetWidth,
        Math.random() * document.body.offsetWidth,
        Math.random() * document.body.offsetWidth
      )
    );
    diamondT = Math.floor(
      Math.min(
        Math.random() * (document.body.offsetHeight - 145),
        Math.random() * (document.body.offsetHeight - 145),
        Math.random() * (document.body.offsetHeight - 145),
        Math.random() * (document.body.offsetHeight - 145),
        Math.random() * (document.body.offsetHeight - 145)
      )
    );
    gem.style.top = diamondT + "px";
    gem.style.left = diamondL + "px";
    score++;
    scoreC.innerHTML = score;
  }
}
function gemsM() {
  let topp = +getComputedStyle(player).top.split("px")[0] - 1;
  let lefft = +getComputedStyle(player).left.split("px")[0] - 1;
  if (
    topp >= diamondT &&
    topp <= diamondT + 100 &&
    lefft - 10 >= diamondL &&
    lefft - 10 <= diamondL + 100
  ) {
    diamondL = Math.floor(
      Math.min(
        Math.random() * document.body.offsetWidth,
        Math.random() * document.body.offsetWidth,
        Math.random() * document.body.offsetWidth,
        Math.random() * document.body.offsetWidth
      )
    );
    diamondT = Math.floor(
      Math.min(
        Math.random() * (document.body.offsetHeight - 145),
        Math.random() * (document.body.offsetHeight - 145),
        Math.random() * (document.body.offsetHeight - 145),
        Math.random() * (document.body.offsetHeight - 145),
        Math.random() * (document.body.offsetHeight - 145)
      )
    );
    gem.style.top = diamondT + "px";
    gem.style.left = diamondL + "px";
    score++;
    scoreC.innerHTML = score;
  }
}
