import React, { FunctionComponent } from "react";
import Leaflet from './Leaflet';
// import MapBuilder from  "./MapBuilder";

export const MapContainer: FunctionComponent = ({}) => {
  // const krakowLocation = {
  //   lat: 50.06,
  //   lng: 19.94
  // };



  return (
    <div>
      {/* <MapBuilder defaultCenter={krakowLocation} zoom={16} /> */}
      <Leaflet />

    </div>
  );
};

export default MapContainer;
