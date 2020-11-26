import React, { FunctionComponent } from "react";
import MapContainer from "./MapContainer";
import styled from "styled-components";

interface IHome {
  className?: string;
}

export const Home: FunctionComponent<IHome> = ({ className }) => {
  return (
    <div className={className}>
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
};

const styledMapContainer = styled(MapContainer)`
  display: flex;
`;

export default styledMapContainer;
