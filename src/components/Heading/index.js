import React from 'react';

export default function Heading({heading, subHeading, smallHeading}) {
  return(
    <div className={"heading-cont"}>
      <h2 className={"heading" + " " + (smallHeading&&"small-heading")}>{heading}</h2>
      {subHeading!==""&&<p className={"sub-heading"}>{subHeading}</p> }
    </div>
  )
}

Heading.defaultProps = {
  heading: "Heading",
  subHeading: "",
  smallHeading: false
}
