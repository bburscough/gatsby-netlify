import React from 'react';

export default function Banner({videoUrl, mVideoUrl, imageUrl, mImageUrl, heading, subHeading, headingClr, subHeadingClr, btnTxt, btnClr, btnTxtClr, link}){
  return(
    <div className={"banner-cont"}>
      <video autoPlay loop muted poster={imageUrl}>
        <source src={videoUrl}/>
      </video>
      <div className={"banner-content-cont"}>
        <h1 className={"banner-heading"} style={{color: headingClr}}>{heading}</h1>
        {subHeading!==""&&<p className={"banner-sub-heading"} style={{color: subHeadingClr}}>{subHeading}</p>}
        {btnTxt!==""&&<div style={{backgroundColor:btnClr, color: btnTxtClr}} className={"banner-btn"}>{btnTxt}</div> }
      </div>
    </div>
  )
}

Banner.defaultProps = {
  videoUrl: "https://roveconcepts.wistia.com/medias/yg6ybgz0v9",
  mVideoUrl: "https://roveconcepts.wistia.com/medias/g287knbl50",
  imageUrl : "https://cdn.roveconcepts.com/sites/default/files/Still_banner_homesplash.jpg",
  mImageUrl: "https://cdn.roveconcepts.com/sites/default/files/Still_mobile_homesplash.jpg",
  heading: "Refined Luxury Living",
  subHeading: "",
  headingClr: "#ffffff",
  subHeadingClr: "#ffffff",
  btnTxt: "",
  btnClr: "#ffffff",
  btnTxtClr: "#333333",
  link: ""
}
