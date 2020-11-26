import React, { FunctionComponent } from "react";
import MapContainerWrapper from "./MapContainerWrapper";

interface IHome {
  className?: string;
}

export const Home: FunctionComponent<IHome> = ({ className }) => {
  return (
    <div className={className}>
      <body>
        <MapContainerWrapper />
      </body>
    </div>
  );
};

export default Home;
