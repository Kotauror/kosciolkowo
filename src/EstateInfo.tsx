import React, { FunctionComponent } from "react";
import IEstate from "./coordinates/types";
import styled from "styled-components";

interface IEstateInfo {
  activeEstate: IEstate;
  setActiveEstate(arg: null): void;
  className?: string;
}

export const EstateInfo: FunctionComponent<IEstateInfo> = ({
  className,
  activeEstate,
  setActiveEstate
}) => {
  return (
    <div className={className}>
      <button onClick={() => setActiveEstate(null)}>X</button>
      {activeEstate.properties.name}
    </div>
  );
};

const styledEstateInfo = styled(EstateInfo)`
  width: 40em;
`;

export default styledEstateInfo;
