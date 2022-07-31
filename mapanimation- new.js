mapboxgl.accessToken = mapboxgl.accessToken = 'pk.eyJ1IjoiZmFzdGNhcjM3OSIsImEiOiJjbDRicWt2bzIxb3QyM2ptcjMyMGZtYXJnIn0._qQJzHsStmQ5a36lPcQZ7g';

const map = new mapboxgl.Map({
    container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-71.0834956213107, 42.32898138796063], 
        zoom: 12.3
         });
    map.addControl(new mapboxgl.NavigationControl());
	

//setup markers
var markers = [];

markers[0] = new mapboxgl.Marker({
	color: "#FF0000",//red
	rotationAlignment: 'map'
})
.setLngLat([-71.192761, 42.357575])
.addTo(map);
markers[1] = new mapboxgl.Marker({
	color: "#00ff00",//green
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markers[2] = new mapboxgl.Marker({
	color: "#0000ff",//blue
	rotationAlignment: 'map'
})
.setLngLat([0,0])
.addTo(map);
markers[3] = new mapboxgl.Marker({
	color: "#FF00ff",//prpl
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markers[4] = new mapboxgl.Marker({
	color: "#FFFF00",//yellow
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markers[5] = new mapboxgl.Marker({
	color: "#00FFFF",//Aqua
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markers[6] = new mapboxgl.Marker({
	color: "#FFFFFF",//White
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markers[7] = new mapboxgl.Marker({
	color: "#000000",//blak
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markers[8] = new mapboxgl.Marker({
	color: "#552500",//brown
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markers[9] = new mapboxgl.Marker({
	color: "#450080",//prpl
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);

async function run(){
    // get bus data    
	const locations = await getBusLocations();

		locations.forEach((vehicle, i) =>{
		//console.log(locations[i].attributes.latitude);
		let coordinates = [locations[i].attributes.longitude, locations[i].attributes.latitude];
		markers[i].setLngLat(coordinates);
		markers[i].setRotation(locations[i].attributes.bearing+45);
	});

	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=19&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();