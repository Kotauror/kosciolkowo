import React, { FunctionComponent, useState } from "react";
import Leaflet from "./Leaflet";
import EstateInfo from "./EstateInfo";
import IEstate from "./coordinates/types";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface IMapContainer {
  className?: string;
}

export const MapContainer: FunctionComponent<IMapContainer> = ({
  className
}) => {
  const [activeEstate, setActiveEstate] = useState<IEstate | null>(null);
  console.log(activeEstate)
  return (
    <TransitionGroup component={null}>
      <div className={className}>
        <Leaflet setActiveEstate={setActiveEstate} />
        {activeEstate && (
          <CSSTransition classNames="dialog" timeout={3000} in={activeEstate !== null}>
            <EstateInfo
              activeEstate={activeEstate}
              setActiveEstate={setActiveEstate}
            />
          </CSSTransition>
        )}
      </div>
    </TransitionGroup>
  );
};

const styledMapContainer = styled(MapContainer)`
  display: flex;
`;

export default styledMapContainer;
