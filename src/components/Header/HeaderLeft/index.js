import React from "react";
import logo from "../../../assets/images/logo.svg"

export default function HeaderLeft(){
  return(
    <div className={"header-left-cont"}>
      <img className={"header-logo"} src={logo} alt={"Rove Concepts Logo"}/>
    </div>
  )
}

HeaderLeft.defaultProps = {
};
