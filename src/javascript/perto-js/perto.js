
var map = L.map('mapContainer').setView([latitude, longitude], zoomLevel);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    var marker = L.marker([latitude, longitude]).addTo(map);


const inputs = document.querySelectorAll('input[type="text"], input[type="email"]');

