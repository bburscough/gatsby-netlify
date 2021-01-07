import React from "react";

export default function PromoBar({text, capital, font}){
  return(
    <div className={"promo-bar-section"}>
      <div className={"promo-bar-cont"}>
        <p style={{fontSize:font, textTransform: capital&&"uppercase"}} className={"promo-bar-txt"}>{text}</p>
      </div>
    </div>
  )
}

PromoBar.defaultProps = {
  text: "Promo Bar",
  font:"14px",
  capital: true
};
