let items = Array.from(document.getElementsByClassName("b-carousel__carousel-item"));
let frame = document.getElementsByClassName("b-carousel__carousel-frame")[0];
let order = items.length
let count = 0

window.carouselBack = function() {
  if(items[count]){
    frame.classList.add('hide')
    setTimeout(
      function() {
        items[count].style.order = order + 1
        count ++
        order ++
        frame.classList.remove('hide')
      }
    , 300 )
  } else {
    count = 0
    window.carouselBack()
  }
}

window.carouselForward = function() {
  if(items[count - 1]){
    frame.classList.add('hide')
    setTimeout(
      function() {
        items[count - 1].style.order = order - items.length
        count --
        order --
        frame.classList.remove('hide')
      }
    , 300 )
  } else {
    count = items.length
    window.carouselForward()
  }
}

import '../owners.html'
import '../racing.html'
import '../collection.html'
