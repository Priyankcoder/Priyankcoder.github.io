
// Change the navbar button color on click
const navClass = document.querySelector(".nav")
const navLink = navClass.querySelectorAll("a");
function colortoggler(){
  navLink[0].style.color = "aliceblue";
  navLink[0].style.borderBottom = "none";

    if (this.style.color != "rgb(114, 250, 234)"){
        navLink.forEach(
            function (item){
                if (item.style.color == "rgb(114, 250, 234)"){
                    item.style.color = "aliceblue";
                    item.style.borderBottom = "none";
                }

            }
        );
        this.style.color = "rgb(114, 250, 234)";
        this.style.borderBottom = "1px solid rgb(114, 250, 234)"

    }
    
}
navLink.forEach((item) => item.addEventListener("click", colortoggler))


var i = 0;
var txt = `PRIYANK RASTOGI.`; /* The text */
var speed = 300; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("name").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    
  }
}
typeWriter();


let html =  document.querySelector(".html");
let css =  document.querySelector(".css");
let js =  document.querySelector(".js");
let django =  document.querySelector(".django");
let skills = document.querySelector(".progress");
// console.table(skills);

let finalh = () => {
  html.style.width = "80%";
  html.style.transition = "all 2s linear";
  setTimeout(()=>html.innerHTML = "<p>80%</p>" ,2000);
  }
let finalc = () => {
  css.style.width = "70%";
  css.style.transition = "all 2s linear";
  setTimeout(()=>css.innerHTML = "<p>70%</p>" ,2000);
  }
let finalj = () => {
  js.style.width = "60%";
  js.style.transition = "all 2s linear";
  setTimeout(()=>js.innerHTML = "<p>60%</p>" ,2000);
  }
let finald = () => {
  django.style.width = "50%";
  django.style.transition = "all 2s linear";
  setTimeout(()=>django.innerHTML = "<p>50%</p>" ,2000);
  }

function progressbar(){
  html.style.width = "1%";
  html.style.transition = "none";
  html.innerHTML = "";
  setTimeout(finalh, 5);

  css.style.width = "1%";
  css.style.transition = "none";
  css.innerHTML = "";
  setTimeout(finalc, 5)

  js.style.width = "1%";
  js.style.transition = "none";
  js.innerHTML = "";
  setTimeout(finalj, 5)

  django.style.width = "1%";
  django.style.transition = "none";
  django.innerHTML = ""
  setTimeout(finald, 5)
    
};

function testingh(){
  html.style.width = "1%";
  html.style.transition = "none";
  html.innerHTML = "";
  html.removeEventListener("mouseover",testingh);

  setTimeout(finalh, 5);
  setTimeout(()=>html.addEventListener("mouseover",testingh),2050)
  

}
function testingc(){
  css.removeEventListener("mouseover",testingc);
  css.style.width = "1%";
  css.style.transition = "none";
  css.innerHTML = "";
  setTimeout(finalc, 5);
  setTimeout(()=>css.addEventListener("mouseover",testingc),2050)
  

}
function testingj(){
  js.removeEventListener("mouseover",testingj);
  js.style.width = "1%";
  js.style.transition = "none";
  js.innerHTML = "";
  setTimeout(finalj, 5);
  setTimeout(()=>js.addEventListener("mouseover",testingj),2050)
  

}
function testingd(){
  django.removeEventListener("mouseover",testingd);
  django.style.width = "1%";
  django.style.transition = "none";
  django.innerHTML = "";
  setTimeout(finald, 5);
  setTimeout(()=>django.addEventListener("mouseover",testingd),2050)
  

}
skills.addEventListener("mousedown", progressbar);
html.addEventListener("mouseover", testingh);
css.addEventListener("mouseover", testingc);
js.addEventListener("mouseover", testingj);
django.addEventListener("mouseover", testingd);