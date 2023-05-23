window.addEventListener("scroll", checkViewport);

window.addEventListener("scroll",addfadeout);
function addfadeout(){
  var element = document.getElementsByClassName('container2')[0];

  var area = element.getBoundingClientRect();
  if(area.top < window.innerHeight+10){
    setTimeout(element.classList.add("animate"), 2000);
  }
}


function checkViewport() {
  var element = document.getElementById("container");
  var element2 = document.getElementsByTagName("nav")[0];

  var skills = document.getElementById("lang");
  var progressbar = document.getElementsByClassName("percentage");

  var skillrect = skills.getBoundingClientRect();
  var rect = element.getBoundingClientRect();

  if (rect.top < 0) {
    element2.style.backgroundColor = "white";

  }
  if (rect.top >= 0) {
    element2.style.backgroundColor = "#0e131f00";

  }

  let a = ["html", "css", "js", "c", "cpp", "python"];
  var langlist = document.getElementsByClassName("ele");
  if (skillrect.top < window.innerHeight) {
    skills.classList.add("skillbox-animation");
    for (let i = 0; i < 6; i++) {
      if (langlist[i].getBoundingClientRect().bottom < window.innerHeight) {
        setTimeout(progressbar[i].classList.add(a[i]), 1000);
      }
    }
  }
}


const typewriter = document.getElementById('typewriter');
const text = `I'm Deepak Yadav`; // The text to be displayed
var tc = document.getElementById('typewriter');
let index = 0;

function type() {
  if (index <= text.length) {
    typewriter.textContent = text.slice(0, index); // Updates the text content
    index++;
    setTimeout(type, 200); // Controls the typing speed (adjust as needed)
  }
  if(index > text.length){
    tc.style = "border: none";
  }
}

addEventListener(onload,type())
