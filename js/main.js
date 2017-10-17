//Map

function initMap() {
    var coordinates = { lat: 59.936371, lng: 30.321663 },
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: coordinates
    }),
  
    markerImage = "img/icon-map-pin.svg",
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
      });
  }

  //Navigation

  var toggleClose = document.querySelector(".main-nav__toggle");
  var mainNav = document.querySelector(".main-nav");
  var toggleBurger = document.querySelector(".page-header__toggle");

  toggleClose.addEventListener("click", function(event) {
    event.preventDefault();
    mainNav.classList.add("main-nav--close");
  });

  toggleBurger.addEventListener("click", function(event) {
    event.preventDefault();
    if (mainNav.classList.contains("main-nav--close")) {
      mainNav.classList.remove("main-nav--close");
    } else {
      mainNav.classList.add("main-nav--close");
    }
  });

  //Touch Slider

  var reviewButtons = document.querySelectorAll(".about__toggle-item"),
  reviewRadio = document.querySelectorAll('input[name="about__radio"]'),
  reviewSlider = document.querySelector(".about__slider"),
  swipeStartX = null,
  swipeEndX = null,
  page = 0;
  
  reviewSlider.addEventListener("touchstart", swipeStart);
  reviewSlider.addEventListener("touchend", swipeEnd);
  
  
  function swipeStart(event) {
    setPage();
    swipeStartX = event.changedTouches[0].screenX;
  }
  
  function swipeEnd(event) {
    setPage();
    swipeEndX = event.changedTouches[0].screenX;
    if (!swipeStartX || !swipeEndX) return;
    if (swipeStartX < swipeEndX) {
      if (reviewButtons[page - 1]) {
        reviewButtons[page - 1].click();
        page--;
      }
    } else if (swipeStartX > swipeEndX) {
      if (reviewButtons[page + 1]) {
        reviewButtons[page + 1].click();
        page++;
      }
    }
    swipeStartX = null;
    swipeEndX = null;
  }
  
  function setPage() {
    reviewRadio.forEach( function(elem, number) {
      if (elem.checked) page = number;
    });
  }
