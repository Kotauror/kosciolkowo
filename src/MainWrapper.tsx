import React, { FunctionComponent } from "react";
import TopNavigation from "./TopNavigation";
import styled from "styled-components";

interface IMainWrapper {
  className?: string;
  children: JSX.Element | JSX.Element[];
  theme?: {
    navbarHeight: string;
  };
}

export const MainWrapper: FunctionComponent<IMainWrapper> = ({
  className,
  children
}) => {
  return (
    <div className={className}>
      <TopNavigation />
      <div className="content">{children}</div>
    </div>
  );
};

const styledMainWrapper = styled(MainWrapper)`
  font-family: Helvetica, sans-serif;
  .content {
    margin-top: ${props => props.theme.navbarHeight};
  }
`;

export default styledMainWrapper;
