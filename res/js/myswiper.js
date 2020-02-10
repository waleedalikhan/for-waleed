var lastCat = "cat1";
var mySwiper = new Swiper(".swiper-container", {
  // slidesPerView: 'auto',
  slidesPerView: 6,
  spaceBetween: 30,
  freeMode: !0,
  loop: !1,
  watchOverflow: !0,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  }
});

mySwiper.slidesPerView = 8;
mySwiper.update();

mySwiper.on("reachBeginning", function() {
  console.log("Swiper Beginning reached");
});

mySwiper.on("reachEnd", function() {
  console.log("Swiper end reached");
});

function next() {
  // mySwiper.slideTo(count++);
  console.log("in next");

  mySwiper.slideNext();
}

var waypoints = $(".group-item ").waypoint({
  handler: function(direction) {
    var index = this.element.getAttribute("index");

    if (direction === "down") {
      index = parseInt(index) - 1;
    } else {
      index = parseInt(index) - 2;
    }

    mySwiper.slideTo(index);
    console.log("Last Cat2 : " + index);
  }
});
