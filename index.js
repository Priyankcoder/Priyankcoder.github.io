
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


animation = (bar)=>{
  bar.classList.add("animate")
  bar.removeEventListener("mouseover", animate);
  setTimeout(()=>bar.classList.remove("animate"), 4000)
  setTimeout(()=>bar.addEventListener("mouseover", animate), 4010)

}
animate = (event)=>{
  const bar = event.target;
  animation(bar);


}

let skillsArr = document.querySelectorAll(".skills");
let skills = document.querySelector(".progress");


skills.addEventListener("mousedown", ()=>{
  skillsArr.forEach((bar)=>animation(bar))


});

skillsArr.forEach((bar)=>bar.addEventListener("mouseover",animate));