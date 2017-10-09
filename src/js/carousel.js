let items = document.getElementsByClassName("carousel__carousel-item");
let frame = document.getElementsByClassName("carousel__carousel-frame")[0];
let width = items.length*100
let count = 1
initializeCarousel()

function initializeCarousel() {
  console.log(width)
  frame.style.width = width + "vw";
}

window.carouselForward = function() {
  if(count < items.length) {
    count ++
    frame.style.transform = "translate(-" + (count*100-100) +"vw, 0vw)";
  }
}

window.carouselBack = function() {
  if(count > 1) {
    count --
    frame.style.transform = "translate(-" + (count*100-100) +"vw, 0vw)";
  }
}
