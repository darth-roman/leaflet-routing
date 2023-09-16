const map = L.map('map').setView([51.505, -0.09], 13)

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// L.Routing.control({
//     waypoints: [
//       L.latLng(57.74, 11.94),
//       L.latLng(57.6792, 11.949)
//     ]
//   }).addTo(map);


  const initMap = ({mapTile, mapAttribution, zoom = 13} = {}) => {
    L.tileLayer(mapTile, {
        maxZoom: zoom,
        attribution: mapAttribution
    }).addTo(map)

    console.log(mapTile);

    // L.Routing.control({
    //     waypoints: [
    //       L.latLng(57.74, 11.94),
    //       L.latLng(57.6792, 11.949)
    //     ]
    //   }).addTo(map);
    
  }


  const initRouting = ({waypoints}) => {
    L.Routing.control({
        waypoints
      }).addTo(map);

      console.log(waypoints);
  }

  initMap({
    mapTile: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    mapAttribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  })

  initRouting({waypoints: [
    L.latLng(57.74, 11.94),
    L.latLng(57.6792, 11.949)
  ]})
 