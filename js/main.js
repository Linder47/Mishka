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