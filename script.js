const carousel = document.querySelector(".carousel");
const carousels = document.querySelectorAll(".slide");
const subtext = document.querySelector(".subtext");
const text = document.querySelector(".text");
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("textitem");
let currentIndex = 0;


console.log(carousels[0].style)
function moveCarousely() {
  if(currentIndex == 0) {
    carousels[0].style.transform = "translateX(0%)";
    carousels[0].style.top = "25vh";
    carousels[0].style.zIndex = "5";
  
    carousels[1].style.transform = "translateX(-40%)";
    carousels[1].style.top = "20vh";
    carousels[1].style.zIndex = "4";
  
    carousels[2].style.transform = "translateX(-60%)";
    carousels[2].style.top = "16vh";
    carousels[2].style.zIndex = "3";
  
    carousels[3].style.transform = "translateX(70%)";
    carousels[3].style.top = "17vh";
    carousels[3].style.zIndex = "1";
  
    carousels[4].style.transform = "translateX(40%)";
    carousels[4].style.top = "28vh";
    carousels[4].style.zIndex = "2";
  }if(currentIndex == 1) {
    carousels[1].style.transform = "translateX(0%)";
    carousels[1].style.top = "25vh";
    carousels[1].style.zIndex = "5";
  
    carousels[2].style.transform = "translateX(-40%)";
    carousels[2].style.top = "20vh";
    carousels[2].style.zIndex = "4";
  
    carousels[3].style.transform = "translateX(-60%)";
    carousels[3].style.top = "16vh";
    carousels[3].style.zIndex = "3";
  
    carousels[4].style.transform = "translateX(70%)";
    carousels[4].style.top = "17vh";
    carousels[4].style.zIndex = "1";
  
    carousels[0].style.transform = "translateX(40%)";
    carousels[0].style.top = "28vh";
    carousels[0].style.zIndex = "2";
  }if(currentIndex == 2) {
    carousels[2].style.transform = "translateX(0%)";
    carousels[2].style.top = "25vh";
    carousels[2].style.zIndex = "5";
  
    carousels[3].style.transform = "translateX(-40%)";
    carousels[3].style.top = "20vh";
    carousels[3].style.zIndex = "4";
  
    carousels[4].style.transform = "translateX(-60%)";
    carousels[4].style.top = "16vh";
    carousels[4].style.zIndex = "3";
  
    carousels[0].style.transform = "translateX(70%)";
    carousels[0].style.top = "17vh";
    carousels[0].style.zIndex = "1";
  
    carousels[1].style.transform = "translateX(40%)";
    carousels[1].style.top = "28vh";
    carousels[1].style.zIndex = "2";
  }if(currentIndex == 3) {
    carousels[3].style.transform = "translateX(0%)";
    carousels[3].style.top = "25vh";
    carousels[3].style.zIndex = "5";
  
    carousels[4].style.transform = "translateX(-40%)";
    carousels[4].style.top = "20vh";
    carousels[4].style.zIndex = "4";
  
    carousels[0].style.transform = "translateX(-60%)";
    carousels[0].style.top = "16vh";
    carousels[0].style.zIndex = "3";
  
    carousels[1].style.transform = "translateX(70%)";
    carousels[1].style.top = "17vh";
    carousels[1].style.zIndex = "1";
  
    carousels[2].style.transform = "translateX(40%)";
    carousels[2].style.top = "28vh";
    carousels[2].style.zIndex = "2";
  }if(currentIndex == 4) {
    carousels[4].style.transform = "translateX(0%)";
    carousels[4].style.top = "25vh";
    carousels[4].style.zIndex = "5";
  
    carousels[0].style.transform = "translateX(-40%)";
    carousels[0].style.top = "20vh";
    carousels[0].style.zIndex = "4";
  
    carousels[1].style.transform = "translateX(-60%)";
    carousels[1].style.top = "16vh";
    carousels[1].style.zIndex = "3";
  
    carousels[2].style.transform = "translateX(70%)";
    carousels[2].style.top = "17vh";
    carousels[2].style.zIndex = "1";
  
    carousels[3].style.transform = "translateX(40%)";
    carousels[3].style.top = "28vh";
    carousels[3].style.zIndex = "2";
  }
}

function subtextX() {
  subtext.style.transform = `translatex(-${currentIndex * 20}%)`;
  //carousels.style.transform = `translatex(-${currentIndex * 20}%)`;
}
function subtextXB() {
  subtext.style.transform = `translatex(-${currentIndex * 0}%)`;
  //carousels.style.transform = `translatex(-${currentIndex * 20}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex > 4) {
    currentIndex = 0;
  }
  moveCarousely();
}

for (var i = currentIndex; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function myFunction1() {
  nextSlide();
  subtextX();
  titleScroll();
}

function myFunction2() {

}

//setInterval(nextSlide, 3000);
//setInterval(moveCarouselx, 3000);
//setInterval(subtextX, 3000);