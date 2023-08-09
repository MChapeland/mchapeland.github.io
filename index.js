var map = L.map('map').setView([51.505, -0.09], 13);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('<b>Hello world!</b><br />I am a popup.').openPopup();

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map).bindPopup('I am a circle.');

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map).bindPopup('I am a polygon.');


var popup = L.popup()
    .setLatLng([51.513, -0.09])
    .setContent('I am a standalone popup.')
    .openOn(map);

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent('You clicked the map at ' + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


//Database Communication
getData();

async function getData() {
	const response = await fetch("https://raw.githubusercontent.com/MChapeland/CuriosityMap/main/data.csv");;
	const data = await response.text();

	const table = data.split('\n').slice(1);
	table.forEach(row => {
		const column = row.split(',');
		const name = column[0];
		const posX = column[1];
		const posY = column[2];
		const layer = column[3];
		const color = column[4];
		const icon = column[5];
		const content = column[6];

		console.log(name, color);


	});

}