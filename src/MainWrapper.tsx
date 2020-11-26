import React, { FunctionComponent } from "react";
import TopNavigation from "./TopNavigation";

interface IMainWrapper {
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export const MainWrapper: FunctionComponent<IMainWrapper> = ({
  className,
  children
}) => {
  return (
    <div className={className}>
      <TopNavigation />
      <div>{children}
      </div>
    </div>
  );
};

export default MainWrapper;
