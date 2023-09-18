    const map = L.map('map').setView([51.505, -0.09], 13)

    // DOM
    const searchQuery = document.getElementById('search')
    const searchBtn = document.getElementById('search-btn')

    // Method definition section

  const initMap = ({mapTile, mapAttribution, zoom = 13} = {}) => {
    L.tileLayer(mapTile, {
        maxZoom: zoom,
        attribution: mapAttribution
    }).addTo(map)

    
  }


  const initRouting = ({waypoints}) => {
    L.Routing.control({
        waypoints,
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim()
      }).addTo(map);

      console.log(L.Control.Geocoder);
  }


  // Methods calling section

  initMap({
    mapTile: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    mapAttribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  })

  initRouting({
    waypoints: [
      L.latLng(57.74, 11.94),
      L.latLng(57.6792, 11.949)
    ]
})
 
console.log(initRouting);

  // sandbox
//   const input = document.getElementsByClassName('glass')[0]
//   const provider = GeoSearch.OpenStreetMapProvider()
//   const result = await provider.search({query: input.value})

  const provider = new GeoSearch.OpenStreetMapProvider()

  const searchLocation = (e, city) => {
    e.preventDefault()
    const promise = provider.search({
        query: city
      })
    
      promise.then((value) => {
        const xCoor = value[0].x
        const yCoor = value[0].y
        const label = value[0].label
        const marker = L.marker([yCoor, xCoor]).addTo(map)
        console.log(label);
        marker.bindPopup("<b>Found location</b><br>" + label).openPopup();
      })

      searchQuery.value = ""
  }
  searchBtn.addEventListener('click', (e) => searchLocation(e, searchQuery.value))
 
  
//   const search = new GeoSearch.GeoSearchControl({
//     notFoundMessage: 'Sorry, we cant find it',
//     provider: new GeoSearch.OpenStreetMapProvider(),
//     style: 'bar'
// })
    map.addControl(search)