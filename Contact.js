// Initialize and add the map
function initMap() {
    // The location of SenCtech
    const SenCtech = { lat: 50.83, lng: -0.141 };
    // The map, centered at SenCtech
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: SenCtech,
        draggable: false,
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true
    });
    // The marker, positioned at SenCtech
    const marker = new google.maps.Marker({
        position: SenCtech,
        map: map,
    });
}

window.initMap = initMap;
