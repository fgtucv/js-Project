const checkbox = document.querySelector(".switch-input");
const body = document.querySelector("body");
const main = document.querySelector("main");
const text = document.querySelectorAll("span, h1, h2, p, button");
const bacgraund = document.querySelectorAll(
  "section, body, div, nav, list, main"
);

checkbox.addEventListener("click", checkStyle);

let state = false;

localStorage.setItem("themeState", JSON.stringify(state));

function checkStyle(element) {
  const activeState = JSON.parse(localStorage.getItem("themeState"));

  if (activeState === false) {
   state = true
  } else{
   state = false
  }

  localStorage.setItem("themeState", JSON.stringify(state));

  if(JSON.parse(localStorage.getItem("themeState")) === true){
    body.classList.add("blackThemeBacgraund");
  } else{
    body.classList.remove("blackThemeBacgraund");
  }
}

// function changeTheme(){
//    if(body.className === "blackThemeBacgraund"){
//       body.classList.remove("blackThemeBacgraund");

//    } else if(body.className !== "blackThemeBacgraund"){
//       body.classList.add("blackThemeBacgraund");
//    }
// }
