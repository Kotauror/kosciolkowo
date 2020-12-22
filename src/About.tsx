import React, { FunctionComponent } from "react";

interface IAbout {
  className?: string;
}

export const About: FunctionComponent<IAbout> = ({ className }) => {
  return (
    <div className={className}>
      OLABOGA
      KOASCIOLKOWO
    </div>
  );
};

export default About;
