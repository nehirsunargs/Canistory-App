const apikey =
    "pk.eyJ1IjoiOWFkaXR5YSIsImEiOiJja3N2czUzeGMwbGE4MndsZ2dndXU2d2MyIn0.-iW-5m_X-yW-X5-N9bISkw";

const mymap = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
        attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: apikey
    }
).addTo(mymap);
