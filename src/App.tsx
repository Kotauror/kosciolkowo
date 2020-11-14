import React from "react";
import MapContainer from "./MapContainer";

function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="leaflet.css" />
        <script src="leaflet.js"></script>

        <script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>
        <link rel="stylesheet" href="files/leaflet.draw.css" />
        <script src="files/Leaflet.draw.js"></script>
      </head>
      <body>
        <MapContainer />
        </body>
    </div>
  );
}

export default App;
