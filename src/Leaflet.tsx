import React, { FunctionComponent, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";
import properties from "./coordinates/properties";
import { PropertyType } from "./coordinates/types";

const krakowLocation = [50.06, 19.94];

interface ILeaflet {
  className?: string;
}

const defaultZoom = 18;

const getStyleForPropertyType = (propertyType: PropertyType) => {
  if (propertyType === PropertyType.PLOT_OF_LAND) {
    return {
      color: "#343330",
      fillOpacity: 0.3,
      weight: 2,
    };
  }
  if (propertyType === PropertyType.CHURCH_OPEN_TO_PUBLIC) {
    return {
      color: "#0080FF",
      weight: 1,
      fillOpacity: 0.5,


    };
  }

  if (propertyType === PropertyType.CHURCH_CLOSED_FOR_PUBLIC) {
    return {
      color: "CC0066",
      weight: 1,
      fillOpacity: 0.5,


    };
  }
  if (propertyType === PropertyType.PRESBYTERY) {
    return {
      color: "yellow",
      weight: 1,
      fillOpacity: 0.5,


    };
  }

  if (propertyType === PropertyType.PARK_CLOSED_FOR_PUBLIC) {
    return {
      color: "#FF0000",
      weight: 1,
      fillOpacity: 0.5,

    };
  
  }

  if (propertyType === PropertyType.PARK_OPEN_TO_PUBLIC) {
    return {
      color: "#00FF00",
      weight: 1,
      fillOpacity: 0.5,

    };
  }
};

const Leaflet: FunctionComponent<ILeaflet> = ({ className }) => {
let currentCoordinates: any = [];

useEffect(() => {
    var map = L.map("map", {
      center: krakowLocation,
      zoom: defaultZoom,
    });

    L.tileLayer(
      // "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png",
      // "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      // "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      // 'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png',
      'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png',
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
      currentCoordinates.push(`[${lat}, ${lng}]`)
      console.log(currentCoordinates.toString())
    });

    properties.map(property => {
      var polygon = L.polygon(
        property.coordinates,
        getStyleForPropertyType(property.propertyType)
      ).addTo(map);
      // polygon.bindPopup(property.name)
    });
  }, []);

  return <div id="map" className={className} />;
};

const StyledLeaflet = styled(Leaflet)`
  width: 1480px;
  height: 980px;
`;

export default StyledLeaflet;
