import React, { FunctionComponent, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import styled from "styled-components";
import IEstate, { PropertyType } from "./coordinates/types";
import { estates } from "./coordinates/church_estates";
import polygonStyles from "./polygonStyles";

const krakowLocation = [50.06, 19.94];

const simplefMapStyle = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
  {
    detectRetina: true,
    maxZoom: 20,
    maxNativeZoom: 17
  }
);

const detailedMapStyle = L.tileLayer(
  "https://tile.osm.ch/switzerland/{z}/{x}/{y}.png",
  {
    detectRetina: true,
    maxZoom: 20,
    maxNativeZoom: 17
  }
);

interface ILeaflet {
  className?: string;
  setActiveEstate(activeEstate: IEstate): void;
}

const defaultZoom = 15;

const getEstatesByPropertyType = (propertyType: PropertyType) => {
  return estates[0].features.filter(
    location => location.properties.propertyType === propertyType
  );
};

const getEstatesByInnerCharacter = (innerCharacter: boolean) => {
  return estates[0].features.filter(
    location => location.properties.isInnerElement === innerCharacter
  );
};

const estateSettings = (setActiveEstate: any) => {
  return {
    style: function(feature: any) {
      switch (feature.properties.propertyType) {
        case PropertyType.PLACE_OF_WORSHIP_OPEN_TO_PUBLIC:
          return polygonStyles.placeOfWorshipOpen;
        case PropertyType.PLOT_OF_LAND:
          return polygonStyles.plotOfLandStyle;
        case PropertyType.PLACE_OF_WORSHIP_CLOSED_FOR_PUBLIC:
          return polygonStyles.placeOfWorshipClosed;
        case PropertyType.GREEN_AREA_OPEN_TO_PUBLIC:
          return polygonStyles.greenAreaOpen;
        case PropertyType.GREEN_AREA_CLOSED_FOR_PUBLIC:
          return polygonStyles.greenAreaClosed;
      }
    },
    onEachFeature: function(feature: any, layer: any) {
      layer.bindTooltip(feature.properties.name);
      layer.on("click", () => {
        setActiveEstate(feature);
      });
    }
  };
};

const createMap = (setActiveEstate: any) => {
  var prayerLayers: any = L.geoJSON(
    getEstatesByPropertyType(PropertyType.PLACE_OF_WORSHIP_OPEN_TO_PUBLIC),
    estateSettings(setActiveEstate)
  );

  var greenAreasClosed: any = L.geoJSON(
    getEstatesByPropertyType(PropertyType.GREEN_AREA_CLOSED_FOR_PUBLIC),
    estateSettings(setActiveEstate)
  );

  var wholeChurchArea: any = L.geoJSON(getEstatesByInnerCharacter(false), {
    style: polygonStyles.plotOfLandStyle,
    onEachFeature: function(feature: any, layer: any) {
      layer.bindTooltip(feature.properties.name);
      layer.on("click", () => {
        setActiveEstate(feature);
      });
    }
  });

  var map = L.map("map", {
    center: krakowLocation,
    zoom: defaultZoom,
    layers: [simplefMapStyle, wholeChurchArea]
  });

  var baseMaps = {
    "Simple Map": simplefMapStyle,
    "Detailed Map": detailedMapStyle
  };

  var overlayMaps = {
    "Area occupied by the churches": wholeChurchArea,
    "Places of Prayer": prayerLayers,
    "Green areas closed for public": greenAreasClosed,
  };

  L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);
};

const Leaflet: FunctionComponent<ILeaflet> = ({
  className,
  setActiveEstate
}) => {
  useEffect(() => {
    createMap(setActiveEstate);
  }, []);

  return <div id="map" className={className}></div>;
};

const StyledLeaflet = styled(Leaflet)`
  width: -webkit-fill-available;
  height: 980px;
`;

export default StyledLeaflet;
