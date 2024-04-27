const checkbox = document.querySelector(".switch-input");
const body = document.querySelector("body");
const main = document.querySelector("main");
const text = document.querySelectorAll("span, h1, h2, p, button");
const bacgraund = document.querySelectorAll("section, body, div, nav, list, main");

// console.log(checkbox)


checkbox.addEventListener("click", changeTheme);

function changeTheme(){
   if(body.className === "blackThemeBacgraund"){
      body.classList.remove("blackThemeBacgraund");
      
   } else if(body.className !== "blackThemeBacgraund"){
      body.classList.add("blackThemeBacgraund");
   }
}