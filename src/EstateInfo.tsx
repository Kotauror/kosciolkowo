import React, { FunctionComponent, useState } from "react";
import IEstate from "./coordinates/types";
import styled from "styled-components";
// import { CSSTransition } from 'react-transition-group';


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
    const [toggle, changeToggle] = useState(false);


    console.log(activeEstate)
  return (
    // <CSSTransition classNames="dialog" timeout={300}>

    <div className={className}>
     {/* <CSSTransition */}
            {/* // in={toggle}
            timeout={4000}
            className="element"
            classNames="shift"
            mountOnEnter
            unmountOnExit
          > */}
      <button onClick={() => setActiveEstate(null)}>X</button>
      {activeEstate.properties.name}
     {/* </CSSTransition> */}
         </div>
        //  </CSSTransition>


  );
};

const styledEstateInfo = styled(EstateInfo)`
  width: 40em;

`;

export default styledEstateInfo;
