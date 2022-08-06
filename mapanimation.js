mapboxgl.accessToken =  mapboxgl.accessToken = 'pk.eyJ1IjoiZmFzdGNhcjM3OSIsImEiOiJjbDRicWt2bzIxb3QyM2ptcjMyMGZtYXJnIn0._qQJzHsStmQ5a36lPcQZ7g';

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	center: [-71.0919144560132, 42.356200840571134], 
    zoom: 12.8
	 // Add zoom and rotation controls to the map.
	 });
map.addControl(new mapboxgl.NavigationControl());
map.on('load', () => {
    map.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': [
			[-71.0839246157332,42.3298794008467],
			[-71.082749152772,42.3311212786435],
			[-71.0812304915775,42.3324588585668],
			[-71.0795762391666,42.3321748186414],
			[-71.0762288423027,42.3317306628917],
			[-71.0735412687732,42.3339236514153],
			[-71.0749363527583,42.3350471318695],
			[-71.0769627424171,42.336711569248],
			[-71.080342325741,42.339566575369],
			[-71.0830298991428,42.3416125833587],
			[-71.0842207999524,42.3425443672479],
			[-71.0866508813273,42.3454189326829],
			[-71.0880456300081,42.3480832400997],
			[-71.0893042758998,42.3508473414852],
			[-71.0935737485283,42.3592391624221],
			[-71.0957141512967,42.3608326523221],
			[-71.0994799727792,42.3628779682081],
			[-71.1033771560491,42.3653544425043],
			[-71.105802441767,42.3668938170417],
			[-71.1086071283513,42.368453382118],
			[-71.1107668914926,42.3693572270822],
			[-71.1129931249176,42.3703401220508],
			[-71.1153534688602,42.3721631929558],
			[-71.1174777783632,42.3732015270696],
        ]
        }
    }
    });
        map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'},
            'paint': {
            'line-color': '#766948',
            'line-width': 6,
            'line-opacity' : .5          
            }
    });
    });
	

//setup markers

const markers = [];

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
		// console.log(locations[i].attributes.latitude);
		
		let coordinates = [locations[i].attributes.longitude, locations[i].attributes.latitude];
		markers[i].setLngLat(coordinates);
		markers[i].setRotation(locations[i].attributes.bearing+45);
	});

	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
	console.log(json.data)
}

