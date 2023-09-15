const map = L.map('map').setView([51.505, -0.09], 13)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.Routing.control({
    waypoints: [
      L.latLng(57.74, 11.94),
      L.latLng(57.6792, 11.949)
    ]
  }).addTo(map);
