import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
import Banner from "../components/Banner"
import Heading from "../components/Heading"
import VerticalProductImageCard from "../components/VerticalProductImageCard"
import ImageWTextHoverCard from "../components/ImageWTextHoverCard"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"
import {IconContext} from "react-icons"

let width = window.innerWidth<1366 ? window.innerWidth/2-30:1366/2-30
let topDesigns = [
  { image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_display_Milo_Sectional_FRONT_ClassicTweed_Overcast_0.jpg",
    hoverImage: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_Display_Milo_Modular_Sectional_Alesund_Modern_Felt_Update_View03.jpg",
    title: "Milo Modular Sectional",
    link: "#",
    favourite: false},
  { image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_display_Ophelia_Bed_King_Alesund_1.jpg",
    hoverImage: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_display_Ophelia_Bed_King_Alesund_1_0.jpg",
    title: "Ophelia Bed",
    link: "#",
    favourite: false},
  { image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_Display_WishboneChair_Natural_PCnatural_1%20%281%29.jpg",
    hoverImage: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_display1_Dolf_Dining_Table__4.jpg",
    title: "Wishbone Chair",
    link: "#",
    favourite: false},
  { image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_768_1x/public/_display1_Dresden_Modular_Plush-Weave_Porpoise.jpg",
    hoverImage: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_Display_Dresden_Modular_Alesund_View009_2.jpg",
    title: "Dresden Modular Sectional",
    link: "#",
    favourite: false},
  { image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_display1_Aubrey_Side_Chair_PU_Monaco-Cream_0.jpg",
    hoverImage: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_Display_Aubrey_ArmChair_View06.jpg",
    title: "Aubrey Side Chair",
    link: "#",
    favourite: false},
  { image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_DISPLAY_Porter_Sectional_FRONT_PlushWeave_Fin.jpg",
    hoverImage: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/_Display_Porter+Modular+Scene-PerformanceWeave-Almond_View001_daytime_0.jpg",
    title: "Porter Sectional",
    link: "#",
    favourite: false}
];

let shopTheLook = [
  {
    image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_1280_3x/public/dresdenstl%20homepage_0.png",
    text: "Shop the look",
    square: false,
    width: width+"px",
    heading: "Grand Living",
    subHeading: "Bask in the grandiose atmosphere of this living space.",
    smallHeading: true
  }, {
    image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_1280_3x/public/emerybed%20stl%20homepage_1.png",
    text: "Shop the look",
    square: false,
    width: width+"px",
    heading: "Simplistic Slumber",
    subHeading: "Cooling and calming, this bedroom space is the perfect place to feel relaxed and rejuvenated after long days.",
    smallHeading: true
  }, {
    image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_1280_3x/public/dresdenstl%20homepage_0.png",
    text: "Shop the look",
    square: false,
    width: width+"px",
    heading: "Grand Living",
    subHeading: "Bask in the grandiose atmosphere of this living space.",
    smallHeading: true
  }, {image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/dresdenstl%20homepage_0.png",
    text: "Shop the look",
    square: false,
    width: width+"px",
    heading: "Grand Living",
    subHeading: "Bask in the grandiose atmosphere of this living space.",
    smallHeading: true},
]

let category = [
  {image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_1x/public/Milo-Modular-Sectional_Alesund_Modern-Felt-Update_View03_Product.jpg",
    text: "Shop",
    square: true,
    heading: "Sofas & Sectional",
    smallHeading: true
  },{image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_320_3x/public/Modulars_square_homepage.jpg",
    text: "Shop",
    square: true,
    heading: "Modulars",
    smallHeading: true
  },{image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_480_3x/public/ContentBlocks-Beds.jpg",
    text: "Shop",
    square: true,
    heading: "Beds",
    smallHeading: true
  },{image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_480_3x/public/Dining%20Table%20and%20chairs_Square.jpg",
    text: "Shop",
    square: true,
    heading: "Dining",
    smallHeading: true
  },{image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_480_3x/public/ContentBlocks-LoungeArmChairs.jpg",
    text: "Shop",
    square: true,
    heading: "Lounge & Armchairs",
    smallHeading: true
  },{image: "https://cdn.roveconcepts.com/sites/default/files/styles/picture_480_3x/public/Evelyn-Modular-Outdoor-C002_Instagram.jpg",
    text: "Shop",
    square: true,
    heading: "Outdoor",
    smallHeading: true
  },
]

let margin = 0
const imageSlider= (direction) => {
  if (direction==="left"){
    if (margin < 0){
      margin += width+20;
    }
  } else {
    if (margin > -Math.abs(shopTheLook.length-2*(width+20))){
      margin -= width+20
    }
  }
  document.querySelector(".shop-the-look-cards-cont").style.marginLeft = margin+"px";
  if (margin === 0){
    document.querySelector(".nav-icon-cont-left").style.visibility = "hidden";
  } else if (margin <= -Math.abs(shopTheLook.length-2*(width+20))){
    document.querySelector(".nav-icon-cont-right").style.visibility = "hidden";
  } else {
    [...document.querySelectorAll(".nav-icon-cont")].map((o)=>{
      o.style.visibility = "visible";
    })
  }
}
const IndexPage = () => (

  <Layout>
    <SEO title="Home" />
    <Banner/>
    <div
      className={"body"}
    >
      <div className={"top-designs-cont"}>
        <Heading heading={"Top Designs"}/>
        <div className={"top-design-cards"}>
          {topDesigns.map((o,i)=>{
            return <VerticalProductImageCard {...o} key={i}/>
          })}
        </div>
        <div className={"shop-the-look-cont"}>
          <Heading heading={"Shop the Look"}/>
          <div className={"shop-the-look-slider"}>
            <div className={"slider-nav"} style={{width: window.innerWidth<1366 ? window.innerWidth-60+"px" : 1366-60+"px"}}>
              <IconContext.Provider value={{color: "white", size: "20px"}}>
                <div
                  className={"nav-icon-cont nav-icon-cont-left"}
                  onClick={()=>{imageSlider("left")}}>
                  <FiChevronLeft/>
                </div>
              </IconContext.Provider>
              <IconContext.Provider value={{color: "white", size: "20px"}}>
                <div
                  className={"nav-icon-cont nav-icon-cont-right"}
                  onClick={()=>{imageSlider("right")}}>
                  <FiChevronRight/>
                </div>
              </IconContext.Provider>
            </div>
            <div className={"shop-the-look-cards-cont"}>
              {shopTheLook.map((o,i)=>{
                return <div key={i} className={"shop-the-look-card"} style={{width: o.width}}>
                  <ImageWTextHoverCard {...o}/>
                  <Heading {...o}/>
                </div>
              })}
            </div>
          </div>
        </div>
        <div className={"category-cont"}>
          {category.map((o, i)=>{
            return <div className={"category-card-cont"} key={i}>
              <ImageWTextHoverCard {...o}/>
              <Heading {...o}/>
            </div>
          })}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
