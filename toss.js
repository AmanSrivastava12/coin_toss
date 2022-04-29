let heads = 0;
let tails = 0;
let timeswon = 0;
let timeslost = 0;
let c = "n";
let d = "n";
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
let headsBtn = document.querySelector("#heads-button");
let tailsBtn = document.querySelector("#tails-button");

headsBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  d = "h";
  disableheadsButton();
});
tailsBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  d = "t";
  disabletailsButton();
});
flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  c = "n";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 4s forwards";
    }, 100);
    tails++;
    c = "t";
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 4s forwards";
    }, 100);
    heads++;
    c = "h";
  }
  setTimeout(updateStats, 4000);
  disableflipButton();
});
function updateStats() {
  if (c == d) {
    timeswon++;
    document.querySelector("#win-lose").textContent = `WHOA! YOU HAVE WON.`;
  } else if (d != "n") {
    timeslost++;
    document.querySelector("#win-lose").textContent = `OOPS! YOU HAVE LOST.`;
  }
  document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
  document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
  document.querySelector(
    "#win-number"
  ).textContent = `Number of times you have won - ${timeswon}`;
  document.querySelector(
    "#lose-number"
  ).textContent = `Number of times you have lost - ${timeslost}`;
}
function disableflipButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3800);
}
function disableheadsButton() {
  headsBtn.disabled = true;
  setTimeout(function () {
    headsBtn.disabled = false;
  }, 4500);
}
function disabletailsButton() {
  tailsBtn.disabled = true;
  setTimeout(function () {
    tailsBtn.disabled = false;
  }, 4500);
}
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  timeswon = 0;
  timeslost = 0;
  d = "n";
  document.querySelector("#win-lose").textContent = `TEST YOUR LUCK NOW !`;
  updateStats();
});
