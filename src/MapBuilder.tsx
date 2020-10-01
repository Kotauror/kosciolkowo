import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polygon
} from "react-google-maps";
import properties from "./coordinates/properties";
import { PropertyType } from "./coordinates/types";

interface MapProperties {
  defaultCenter: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const publicChurchPolyStyle = {
  strokeColor: "#0B218B",
  strokeOpacity: 0.85,
  strokeWeight: 3,
  fillColor: "#1F3CC7",
  fillOpacity: 0.55,
  zIndex: 1
};

const entirePlotPolyStyle = {
  strokeColor: "#FF1493",
  strokeOpacity: 0.85,
  strokeWeight: 3,
  fillColor: "#FF69B4",
  fillOpacity: 0.55
};

const defaultZoomn = 8;

const getStylingForPropertyType = (propertyType: PropertyType) => {
  if (propertyType === PropertyType.PLACE_OF_WORSHIP_OPEN_TO_PUBLIC) {
    return publicChurchPolyStyle;
  }
  if (propertyType === PropertyType.PLOT_OF_LAND) {
    return entirePlotPolyStyle;
  }
}

const MapBuilder = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `1400px`, width: `1500px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((props: MapProperties) => (
  <GoogleMap
    defaultZoom={props.zoom ? props.zoom : defaultZoomn}
    defaultCenter={props.defaultCenter}
  >
    {properties.map(property => (
      <Polygon
        paths={property.coordinates}
        options={getStylingForPropertyType(property.propertyType)}
        onClick={() => alert(property.name)}
      />
    ))}

  </GoogleMap>
));

export default MapBuilder;
