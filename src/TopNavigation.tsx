import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface ITopNavigation {
  className?: string;
}

export const TopNavigation: FunctionComponent<ITopNavigation> = ({
  className
}) => {
  return (
    <div className={className}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/">Główna</NavLink>
        <NavLink to="/onas">O projekcie</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </nav>
    </div>
  );
};

const styledTopNavigation = styled(TopNavigation)`
  background-color: red;
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
`;

export default styledTopNavigation;
