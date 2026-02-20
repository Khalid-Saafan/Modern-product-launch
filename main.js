const navToggle = document.querySelector(".navigation__toggle");

function toggleMenuIcon(e) {
  console.log("we enter the function");
    console.log(e.target)
  console.log(navToggle.src == "src/imgs/Menu-icon.svg");
  console.log(navToggle.src);
  if (navToggle.src == "src/imgs/Menu-icon.svg") {
    navToggle.src = "src/imgs/Close-icon.svg";
  } else navToggle.src = "src/imgs/Menu-icon.svg";
}

navToggle.addEventListener("click", toggleMenuIcon);

console.log("hello world");
