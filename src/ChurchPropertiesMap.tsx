import React, { FunctionComponent, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import styled from "styled-components";
import IEstate, { PropertyType } from "./coordinates/types";
import { estates } from "./coordinates/church_estates";
import { analysed_area } from "./coordinates/analysed_area";
import polygonStyles, {
  defaultWeight,
  highlightedWeight
} from "./polygonStyles";

const krakowLocation = [50.06, 19.94];
const defaultZoom = 15;

const simplefMapStyle = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    detectRetina: true,
    maxZoom: 20,
    maxNativeZoom: 17
  }
);

const detailedMapStyle = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    detectRetina: true,
    maxZoom: 20,
    maxNativeZoom: 17
  }
);

interface IChurchPropertiesMap {
  className?: string;
  setActiveEstate(activeEstate: IEstate): void;
}

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

const actionListenersForLayers = (
  feature: any,
  layer: any,
  setActiveEstate: (activeEstate: IEstate) => void
) => {
  layer.bindTooltip(feature.properties.name);
  layer.on("click", () => {
    setActiveEstate(feature);
  });
  layer.on("mouseover", () => {
    layer.setStyle({
      weight: highlightedWeight
    });
  });
  layer.on("mouseout", () => {
    layer.setStyle({
      weight: defaultWeight
    });
  });
};

const estateSettings = (setActiveEstate: (activeEstate: IEstate) => void) => {
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
      actionListenersForLayers(feature, layer, setActiveEstate);
    }
  };
};

const createMap = (setActiveEstate: (activeEstate: IEstate) => void) => {
  var prayerLayers: any = L.geoJSON(
    getEstatesByPropertyType(PropertyType.PLACE_OF_WORSHIP_OPEN_TO_PUBLIC),
    estateSettings(setActiveEstate)
  );

  var greenAreasClosed: any = L.geoJSON(
    getEstatesByPropertyType(PropertyType.GREEN_AREA_CLOSED_FOR_PUBLIC),
    estateSettings(setActiveEstate)
  );

  var greenAreasOpen: any = L.geoJSON(
    getEstatesByPropertyType(PropertyType.GREEN_AREA_OPEN_TO_PUBLIC),
    estateSettings(setActiveEstate)
  );

  var wholeChurchArea: any = L.geoJSON(getEstatesByInnerCharacter(false), {
    style: polygonStyles.plotOfLandStyle,
    onEachFeature: function(feature: any, layer: any) {
      actionListenersForLayers(feature, layer, setActiveEstate);
    }
  });

  var analysedArea: any = L.geoJSON(analysed_area, {
    style: polygonStyles.analysedArea
  });

  var map = L.map("map", {
    center: krakowLocation,
    zoom: defaultZoom,
    layers: [simplefMapStyle, wholeChurchArea]
  });

  map.on("overlayadd", function(e: MouseEvent) {
    wholeChurchArea.bringToFront();
    prayerLayers.bringToFront();
    greenAreasClosed.bringToFront();
    greenAreasOpen.bringToFront();
  });

  var baseMaps = {
    "Plan miasta": simplefMapStyle,
    "Szczegółowa mapa": detailedMapStyle
  };

  var overlayMaps = {
    "Area occupied by the churches": wholeChurchArea,
    "Places of Prayer": prayerLayers,
    "Green church areas closed for public": greenAreasClosed,
    "Green church open for public": greenAreasOpen,
    "Analysed area": analysedArea
  };

  L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);
};

const ChurchPropertiesMap: FunctionComponent<IChurchPropertiesMap> = ({
  className,
  setActiveEstate
}) => {
  useEffect(() => {
    createMap(setActiveEstate);
  }, []);

  return <div id="map" className={className}></div>;
};

const StyledChurchPropertiesMap = styled(ChurchPropertiesMap)`
  width: -webkit-fill-available;
  height: 980px;
`;

export default StyledChurchPropertiesMap;
