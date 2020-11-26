import React, { FunctionComponent, useState } from "react";
import ChurchPropertiesMap from "./ChurchPropertiesMap";
import EstateInfo from "./EstateInfo";
import IEstate from "./coordinates/types";
import styled from "styled-components";

interface IMapContainer {
  className?: string;
}

export const MapContainer: FunctionComponent<IMapContainer> = ({
  className
}) => {
  const [activeEstate, setActiveEstate] = useState<IEstate | null>(null);
  console.log(activeEstate);
  return (
    <div className={className}>
      <ChurchPropertiesMap setActiveEstate={setActiveEstate} />
      {activeEstate && (
        <EstateInfo
          activeEstate={activeEstate}
          setActiveEstate={setActiveEstate}
        />
      )}
    </div>
  );
};

const styledMapContainer = styled(MapContainer)`
  display: flex;
`;

export default styledMapContainer;
