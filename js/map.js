/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
const mapElement = document.getElementById('map');

if (mapElement) {
   
    const centurion = [-25.8617, 28.1883];
    const strubensValley = [-26.1167, 27.8970];

    const map = L.map('map').setView(centurion, 9);

    L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, SRTM | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
    }).addTo(map);

    L.marker(centurion).addTo(map)
        .bindPopup('<strong>Outdoor Warehouse Centurion</strong><br>+27 (0)12 661 1431');

    L.marker(strubensValley).addTo(map)
        .bindPopup('<strong>Outdoor Warehouse Strubens Valley</strong><br>+27 (0)11 475 0411');

    // So i can fit both of em in the screen
    map.fitBounds([centurion, strubensValley], { padding: [40, 40] });
}


