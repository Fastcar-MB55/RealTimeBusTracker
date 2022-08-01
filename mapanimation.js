mapboxgl.accessToken = 'pk.eyJ1IjoiZmFzdGNhcjM3OSIsImEiOiJjbDRicWt2bzIxb3QyM2ptcjMyMGZtYXJnIn0._qQJzHsStmQ5a36lPcQZ7g'

const markers = [];

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [-71.0919144560132, 42.356200840571134], 
    zoom: 12.8
  });

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}
 
    // get bus data    
	
    async function addLocations(){
        const locations = await getBusLocations();
        console.log(locations);
  
    locations.forEach((bus) => {
      const popup = new mapboxgl.Popup({closeButton: true})
        .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
        .setHTML(`Route ${bus.relationships.route.data.id}, Bus ${bus.attributes.label}`);
      
        const markers = new mapboxgl.Markers()
        .setLngLat([bus.attributes.longitude, bus.attributes.latitude])
        .setPopup(popup)
        .addTo(map);
      setTimeout(() => {markers.remove()}, 14999);
    });
  }
  
  //move markers to updated location
  function run(){
      setTimeout(() => {
        addLocations();
        run();
      }, 15000)};


