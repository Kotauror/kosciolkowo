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

interface ILeaflet {
  className?: string;
  setActiveEstate(activeEstate: IEstate): void;
}

const defaultZoom = 16;

const Leaflet: FunctionComponent<ILeaflet> = ({
  className,
  setActiveEstate
}) => {
  let currentCoordinates: any = [];

  useEffect(() => {
    var map = L.map("map", {
      center: krakowLocation,
      zoom: defaultZoom
    });

    L.tileLayer(
      // "https://tile.osm.ch/switzerland/{z}/{x}/{y}.png",
      "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
      {
        detectRetina: true,
        maxZoom: 20,
        maxNativeZoom: 17
      }
    ).addTo(map);

    var editableLayers = new L.FeatureGroup();
    map.addLayer(editableLayers);

    L.geoJSON(estates, {
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
    }).addTo(map);

    //   L.geoJSON(estates, {
    //     style: function(feature: any) {
    //         switch (feature.properties.propertyType) {
    //             case 'PLOT_OF_LAND': return {        color: "#ff0000",
    //             fillOpacity: 0.3,
    //             weight: 2,
    //             zIndexOffset: -100};
    //             case 'PLACE_OF_WORSHIP_OPEN_TO_PUBLIC':   return {     color: "#ff0000",
    //             weight: 1,
    //             fillOpacity: 0.5,
    //             zIndexOffset: 100};
    //         }
    //     }
    // }).addTo(map);

    // // define custom marker
    // var MyCustomMarker = L.Icon.extend({
    //   options: {
    //     shadowUrl: null,
    //     iconAnchor: new L.Point(12, 12),
    //     iconSize: new L.Point(24, 24),
    //     iconUrl:
    //       "https://upload.wikimedia.org/wikipedia/commons/6/6b/Information_icon4_orange.svg"
    //   }
    // });

    // var drawPluginOptions = {
    //   position: "topright",
    //   draw: {
    //     polyline: {
    //       shapeOptions: {
    //         color: "#f357a1",
    //         weight: 10
    //       }
    //     },
    //     polygon: {
    //       allowIntersection: false, // Restricts shapes to simple polygons
    //       drawError: {
    //         color: "#e1e100", // Color the shape will turn when intersects
    //         message:
    //           "<strong>Polygon draw does not allow intersections!<strong> (allowIntersection: false)" // Message that will show when intersect
    //       },
    //       shapeOptions: {
    //         color: "#bada55"
    //       }
    //     },
    //     circle: false, // Turns off this drawing tool
    //     rectangle: {
    //       shapeOptions: {
    //         clickable: false
    //       }
    //     },
    //     marker: {
    //       icon: new MyCustomMarker()
    //     }
    //   },
    //   edit: {
    //     featureGroup: editableLayers, //REQUIRED!!
    //     remove: false
    //   }
    // };

    // // Initialise the draw control and pass it the FeatureGroup of editable layers
    // // @ts-ignore
    // var drawControl = new L.Control.Draw(drawPluginOptions);
    // map.addControl(drawControl);

    // var editableLayers = new L.FeatureGroup();
    // map.addLayer(editableLayers);

    // map.on("draw:created", function(e: any) {
    //   var type = e.layerType,
    //     layer = e.layer;

    //   if (type === "marker") {
    //     layer.bindPopup("A popup!");
    //   }

    //   var collection = layer.toGeoJSON();

    //   console.log(collection);

    //   editableLayers.addLayer(layer);
    // });

    // map.on("click", function(e: any) {
    //   var coord = e.latlng;
    //   var lat = coord.lat;
    //   var lng = coord.lng;
    //   currentCoordinates.push(`[${lat}, ${lng}]`);
    //   console.log(currentCoordinates.toString());
    // });

    // addPolygons(map, setActiveEstate);
  }, []);

  return <div id="map" className={className}></div>;
};

const StyledLeaflet = styled(Leaflet)`
  width: 1000px;
  height: 980px;
`;

export default StyledLeaflet;
