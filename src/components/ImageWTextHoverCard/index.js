import React, {useState} from 'react';

export default function ImageWTextHoverCard({image, text, width}) {
  let [hover, setHover] = useState(false)
  return(
    <div
      className={"img-w-text-hover-cont"}
      onMouseEnter={()=>{setHover(true)}}
      onMouseLeave={()=>{setHover(false)}}
      >
      <img style={{width: width!==""?width:"100%"}} src={image} alt={text}/>
      <div className={"hover-txt-cont" + " " + (!hover&&"hover-hide")}>
        <p className={"hover-txt"}>{text}</p>
      </div>
    </div>)
}

ImageWTextHoverCard.defaultProps = {
  image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/dresdenstl%20homepage_0.png",
  text: "Shop the look",
  width:""
}
