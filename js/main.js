var carousel = document.getElementById('carousel');

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

  carousel.style.marginLeft = 0;

    next.onmouseover = function() {
      this.style.opacity = .2;
    };

    next.onmouseout = function() {
      this.style.opacity = .5;
    };

    next.onclick = function(){
      if (carousel.style.marginLeft == "0px") {
        carousel.style.marginLeft = "-72em";
      } else if (carousel.style.marginLeft == "-72em") {
        carousel.style.marginLeft = "0px";
      }
     };

    previous.onmouseover = function() {
      this.style.opacity = .2;
    };

    previous.onmouseout = function() {
      this.style.opacity = .5;
    };

    previous.onclick = function(){
    if (carousel.style.marginLeft == "0px") {
      // carousel.style.marginLeft = "-143.5";
        carousel.style.marginLeft = "-72em";
    } else if (carousel.style.marginLeft == "-72.em") {
      carousel.style.marginLeft = "0px";
    }
  };

