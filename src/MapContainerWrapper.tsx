import React, { FunctionComponent, useState } from "react";
import ChurchPropertiesMap from "./ChurchPropertiesMap";
import EstateInfo from "./EstateInfo";
import IEstate from "./coordinates/types";
import styled from "styled-components";

interface IMapContainerWrapper {
  className?: string;
}

export const MapContainerWrapper: FunctionComponent<IMapContainerWrapper> = ({
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

const styledMapContainerWrapper = styled(MapContainerWrapper)`
  display: flex;
`;

export default styledMapContainerWrapper;
