import React, {useState} from 'react';
import {FiHeart} from "react-icons/fi";

export default function VerticalProductImageCard({image, hoverImage, title, link, favourite}) {
  let [hover, setHover] = useState(false);
  let [fav, setFav] = useState(favourite)
  return(
    <div className={"vertical-product-image-card"}>
      <div
        className={"img-cont"}
        onMouseEnter={()=>{setHover(true)}}
        onMouseLeave={()=>{setHover(false)}}>
        <FiHeart
          className={"fav-icon " + (fav?"fav-filled ":"")  + (!hover&&"display-none")}
          onClick={()=>{
            setFav(!fav)
          }}
        />
        <img className={"product-img " + (hover&&"display-none")} src={image} alt={title}/>
        <img className={"product-img-hover " + (!hover&&"display-none")} src={hoverImage} alt={title}/>
      </div>
      <p className={"product-name"}>{title}</p>
    </div>
  )
}

VerticalProductImageCard.defaultProps = {
  image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_display_Milo_Sectional_FRONT_ClassicTweed_Overcast_0.jpg",
  hoverImage: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_Display_Milo_Modular_Sectional_Alesund_Modern_Felt_Update_View03.jpg",
  title: "Milo Modular Sectional",
  link: "#",
  favourite: false,
}
