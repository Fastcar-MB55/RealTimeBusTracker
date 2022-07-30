/* The constant 'markers' is an array that holds markers pushed from the 'run' 
function. Its length changes depending on how many instances of the 19 bus are
running at any given time */
const markers = [];
var markerArray = [];

markerArray[0] = new mapboxgl.Marker({
	color: "#FF0000",//red
	rotationAlignment: 'map'
})
.setLngLat([-71.192761, 42.357575])
.addTo(map);
markerArray[1] = new mapboxgl.Marker({
	color: "#00ff00",//green
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markerArray[2] = new mapboxgl.Marker({
	color: "#0000ff",//blue
	rotationAlignment: 'map'
})
.setLngLat([0,0])
.addTo(map);
markerArray[3] = new mapboxgl.Marker({
	color: "#FF00ff",//prpl
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markerArray[4] = new mapboxgl.Marker({
	color: "#FFFF00",//yellow
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markerArray[5] = new mapboxgl.Marker({
	color: "#00FFFF",//Aqua
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markerArray[6] = new mapboxgl.Marker({
	color: "#FFFFFF",//White
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markerArray[7] = new mapboxgl.Marker({
	color: "#000000",//blak
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markerArray[8] = new mapboxgl.Marker({
	color: "#552500",//brown
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
markerArray[9] = new mapboxgl.Marker({
	color: "#450080",//prpl
	rotationAlignment: 'map'
})
.setLngLat([0, 0])
.addTo(map);
async function run(){
	
    const locations = await getBusLocations();
    /* The following section of code will push specific busses to 'markers' 
    based on how many 19 buses are currently on the road, and add as needed
    when more busses come into service.
    Also removes buses as they come out of service
    */
    if (markers.length !== locations.length) {
        if (markers.length === 0){
            for (i=0; i<locations.length; i++){
            let directionClass = ''
            const busLocation = [locations[i].attributes.longitude, locations[i].attributes.latitude];
            const directionID = locations[i].attributes.direction_id;
            if (directionID == 1) {
                var direction = "Inbound to Kenmore";
                directionClass = 'marker-inbound'
            } else {
                var direction = "Outbound to Fields Corner"
                directionClass = 'marker-outbound'
            };
            const popUpContents = "Direction: " + "<br>" + direction;
            // create a div to hold the marker image
            const el = document.createElement('div');
            el.className = directionClass;
            // create the marker
            let busMarker = new mapboxgl.Marker(el)
            .setLngLat(busLocation)
            .setPopup(new mapboxgl.Popup().setHTML(popUpContents))
            .addTo(map);
            markers.push(busMarker);
            }
            console.log("Initiated Buses to markers array");
        }
        // The following removes a marker if a bus goes out of service
        if (markers.length > locations.length) {
            let difference = markers.length - locations.length;
            for (i=1; i<=difference; i++){
                let indexToRemove = markers.length - 1;
                markers[indexToRemove].remove();
                markers.pop();
            }
        }
        // The following adds a new marker if a bus comes into service
        if (markers.length < locations.length) {
            let difference = locations.length - markers.length;
            for (i=difference; i>0; i--){
                let totalBuses = locations.length;
                const busLocation = [locations[totalBuses - i].attributes.longitude, locations[totalBuses - i].attributes.latitude];
                const directionID = locations[i].attributes.direction_id;
            if (directionID == 1) {
                var direction = "Inbound to Kenmore";
                directionClass = 'marker-inbound'
            } else {
                var direction = "Outbound to Fields Corner"
                directionClass = 'marker-outbound'
            };
            const popUpContents = "Direction: " + "<br>" + direction;
                // create a div to hold the marker image
                const el = document.createElement('div');
                el.className = directionClass;
                // create the marker
                let busMarker = new mapboxgl.Marker(el)
                .setLngLat(busLocation)
                .setPopup(new mapboxgl.Popup().setHTML(popUpContents))
                .addTo(map);
                markers.push(busMarker);
            }
        }
    }
    // Updates bus locations for each bus in 'markers'
    for (i=0; i<locations.length; i++) {
        const busLocation = [locations[i].attributes.longitude, locations[i].attributes.latitude];
        const directionID = locations[i].attributes.direction_id;
        const busMarker = markers[i].getElement();
        if (directionID == 0) {
                busMarker.className = 'marker-outbound mapboxgl-marker mapboxgl-marker-anchor-center'
                markers[i].setPopup(new mapboxgl.Popup().setHTML("Direction: <br>Outbound to Fields Corner"));
            } else {
                busMarker.className = 'marker-inbound mapboxgl-marker mapboxgl-marker-anchor-center'
                markers[i].setPopup(new mapboxgl.Popup().setHTML("Direction: <br>Inbound to Kenmore"));  
            }
            
        markers[i].setLngLat(busLocation)
    }
    
    let runButton = document.getElementById("run-button")
    runButton.style.visibility = "hidden";
    let inServiceDiv = document.getElementById("in-service");
    inServiceDiv.style.visibility = "visible";
    inServiceDiv.style.marginTop = (window.innerHeight - 70) + "px";
    inServiceDiv.textContent = "Buses in Service: " + locations.length;
    
	// timer
	setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?api_key=fb094a50f8c546179b4fffe89cf1f481&filter[route]=19&include=trip';
    const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}