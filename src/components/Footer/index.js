import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaHouzz } from "react-icons/fa";
import Heading from "../Heading"
import Button from "../Button"

export default function Footer({menu, fb, tw, ig, pinterest, houzz}) {
  return(
    <footer>
      <div className={"footer-cont"}>
      {menu.map((o,i)=>{
        return <div
          key={i}
          className={"footer-menu-list-cont"}
        >
          <p className={"footer-menu-list-title"}>{o.title}</p>
          <div className={"footer-menu-list"}>
            {o.submenu.map((val, index)=>{
              return <p key={index} className={"footer-menu-item"}>{val.title}</p>
            })}
          </div>
        </div>
      })}
        <div className={"subscribe-cont"}>
          <Heading
           heading={"Join our mailing list"}
           subHeading={"Get promotions and news by joining"}
          />
          <div className={"subscribe-email-inp-cont"}>
            <input className={"subscribe-email-inp"} type={"text"} placeholder={"Email Address"}/>
            <Button
              text={"Sign Up!"}
              func={()=>{}}
            />
          </div>
          <div className={"social-cont"}>
            <a href={fb}><FaFacebookF/></a>
            <a href={tw}><FaTwitter/></a>
            <a href={ig}><FaInstagram/></a>
            <a href={pinterest}><FaPinterestP/></a>
            <a href={houzz}><FaHouzz/></a>
          </div>
        </div>
      </div>
      <div className={"sub-footer-cont"}>
        <a href={"#"}>Terms</a>
        <p>&nbsp;•&nbsp;</p>
        <a href={"#"}>Privacy </a>
        <p>&nbsp;• 2020 © All Rights Reserved.</p>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  menu: [
    {title: "Help",
    titleLink: "",
    submenu: [
      {title: "Visit Us", link: ""},
      {title: "Contact Us", link: ""},
      {title: "FAQ", link: ""},
      {title: "Store Policy", link: ""},
      {title: "Returns Refund Claims", link: ""},
    ]
    },{title: "Discover",
      titleLink: "",
      submenu: [
        {title: "Sale", link: ""},
        {title: "Membership", link: ""},
        {title: "Swatches", link: ""},
        {title: "Trade Program", link: ""},
        {title: "Our Story", link: ""},
      ]
    }
  ],
  fb: "https://www.facebook.com/roveconcepts",
  tw: "https://twitter.com/roveconcepts/",
  ig: "https://www.instagram.com/roveconcepts/",
  pinterest: "https://www.pinterest.ca/roveconcepts/",
  houzz: "https://www.houzz.com/professionals/furniture-and-accessories/rove-concepts-pfvwus-pf~310544994?"
}
