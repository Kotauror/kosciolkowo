import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface ITopNavigation {
  className?: string;
  theme?: {
    navbarHeight: string;
    colours: {
        primary: string;
    }
  };
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
  background-color: ${props => props.theme.colours.lightPlatinum};
  z-index: 100;
  width: 100%;
  top: 0;
  position: fixed;
  height: ${props => props.theme.navbarHeight};
  text-align: left;
  padding-left: 3em;
  border-bottom: 2px lightgrey solid;
  line-height: ${props => props.theme.navbarHeight};

  a {
      text-decoration: none;
      font-weight: bolder;
      color: ${props => props.theme.colours.primary};
      padding-right: 2em;
  }

  a:active {
    color: ${props => props.theme.colours.secondary};
  }
`;

export default styledTopNavigation;
