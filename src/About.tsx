import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface IAbout {
  className?: string;
  theme?: {
    colours: {
    primary: string;
    }
  };
}

export const About: FunctionComponent<IAbout> = ({ className }) => {
  return (
    <div className={className}>
    <div className="aboutWrapper">
      <h1>O projekcie</h1>
      <h1>Jak gromadzono dane</h1>
      </div>
    </div>
  );
};

const styledAbout = styled(About)`
.aboutWrapper {
  margin-top: 10em;
}
h1 {
  text-align: center;
  color: ${props => props.theme.colours.primary};
}
`

export default styledAbout;
