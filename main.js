    const map = L.map('map').setView([51.505, -0.09], 13)

    // DOM
    const searchQuery = document.getElementById('search')
    const searchBtn = document.getElementById('search-btn')
    
    console.log(searchQuery, searchQuery.value);
    // Method definition section

  const initMap = ({mapTile, mapAttribution, zoom = 13} = {}) => {
    L.tileLayer(mapTile, {
        maxZoom: zoom,
        attribution: mapAttribution
    }).addTo(map)

    
  }


  const initRouting = ({waypoints}) => {
    L.Routing.control({
        waypoints
      }).addTo(map);

      console.log('Help');
  }


  // Methods calling section

  initMap({
    mapTile: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    mapAttribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  })

//   initRouting({waypoints: [
//     L.latLng(57.74, 11.94),
//     L.latLng(57.6792, 11.949)
//   ]})
 

  // sandbox
//   const input = document.getElementsByClassName('glass')[0]
//   const provider = GeoSearch.OpenStreetMapProvider()
//   const result = await provider.search({query: input.value})

  // const query_addr = 'Paris'
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const promise = provider.search({
        query: searchQuery.value
      })
    
      promise.then((value) => {
        const xCoor = value[0].x
        const yCoor = value[0].y
        const label = value[0].label
        const marker = L.marker([yCoor, xCoor]).addTo(map)
        marker.bindPopup("<b>Found location</b><br>" + label).openPopup();
      })
  })
  const provider = new GeoSearch.OpenStreetMapProvider()
  
//   const search = new GeoSearch.GeoSearchControl({
//     notFoundMessage: 'Sorry, we cant find it',
//     provider: new GeoSearch.OpenStreetMapProvider(),
//     style: 'bar'
// })
    map.addControl(search)