import React, { FunctionComponent, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import properties from "./coordinates/properties";
import IEstate, { PropertyType } from "./coordinates/types";

const krakowLocation = [50.06, 19.94];

interface ILeaflet {
  className?: string;
  setActiveEstate(activeEstate: IEstate): void;
}

const defaultZoom = 16;

const getStyleForPropertyType = (propertyType: PropertyType) => {
  switch (propertyType) {
    case PropertyType.PLOT_OF_LAND:
      return {
        color: "#343330",
        fillOpacity: 0.3,
        weight: 2,
        zIndexOffset: -100,
      };
    case PropertyType.PLACE_OF_WORSHIP_OPEN_TO_PUBLIC:
      return {
        color: "#0080FF",
        weight: 1,
        fillOpacity: 0.5,
        zIndexOffset: 100,
      };
    case PropertyType.PLACE_OF_WORSHIP_CLOSED_FOR_PUBLIC:
      return {
        color: "CC0066",
        weight: 1,
        fillOpacity: 0.5,
        zIndexOffset: 100,

      };
    case PropertyType.GREEN_AREA_CLOSED_FOR_PUBLIC:
      return {
        color: "#FF0000",
        weight: 1,
        fillOpacity: 0.5,
        zIndexOffset: 100,

      };
    case PropertyType.GREEN_AREA_OPEN_TO_PUBLIC:
      return {
        color: "#00FF00",
        weight: 1,
        fillOpacity: 0.5,

        zIndexOffset: 100,

      };
  }
};

const addPolygons = (map: any, setActiveEstate: any) => {
  properties.map(property => {
    var polygon = L.polygon(
      property.coordinates,
      getStyleForPropertyType(property.propertyType)
    ).addTo(map);

    polygon.on("click", () => {
      console.log(property)
      setActiveEstate(property)
    });
    polygon.bindTooltip(property.name)
  });
};

const Leaflet: FunctionComponent<ILeaflet> = ({ className, setActiveEstate }) => {
  let currentCoordinates: any = [];

  useEffect(() => {
    var map = L.map("map", {
      center: krakowLocation,
      zoom: defaultZoom
    });

    L.tileLayer(
      "https://tile.osm.ch/switzerland/{z}/{x}/{y}.png",
      // 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
      {
        detectRetina: true,
        maxZoom: 20,
        maxNativeZoom: 17
      }
    ).addTo(map);

    map.on("click", function(e: any) {
      var coord = e.latlng;
      var lat = coord.lat;
      var lng = coord.lng;
      currentCoordinates.push(`[${lat}, ${lng}]`);
      console.log(currentCoordinates.toString());
    });

    addPolygons(map, setActiveEstate);
  }, []);

  return <div id="map" className={className} >


  </div>;
};

const StyledLeaflet = styled(Leaflet)`
  width: 1000px;
  height: 980px;
`;

export default StyledLeaflet;
