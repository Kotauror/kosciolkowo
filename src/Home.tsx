import React, { FunctionComponent } from "react";
import MapContainerWrapper from "./MapContainerWrapper";

interface IHome {
  className?: string;
}

export const Home: FunctionComponent<IHome> = ({ className }) => {
  return (
    <div className={className}>
      <MapContainerWrapper />
    </div>
  );
};

export default Home;
