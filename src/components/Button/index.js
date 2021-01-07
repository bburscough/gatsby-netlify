import React from 'react';

export default function Button({text, black, outline, fullWidth, cap, func}){
  return(
    <div className={"btn" + " " + (outline&&"btn-outline") + " " + (!black&&"btn-red") + " " + (fullWidth&&"btn-full")}>
      <p className={"btn-txt" + " " + (!cap&&"no-cap")}>{text}</p>
    </div>
  )
}

Button.defaultProps = {
  text: "Shop Now",
  black: true,
  outline: false,
  fullWidth: false,
  cap: true,
  func: ()=>{}
}
