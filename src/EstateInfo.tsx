import React, { FunctionComponent } from "react";
import IEstate from "./coordinates/types";
import styled from "styled-components";


interface IEstateInfo {
  activeEstate: IEstate;
  className?: string;
}

export const EstateInfo: FunctionComponent<IEstateInfo> = ({
  activeEstate,
}) => {
  return <div>{activeEstate.moreInfo}</div>;
};

export default EstateInfo;
