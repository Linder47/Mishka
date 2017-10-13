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