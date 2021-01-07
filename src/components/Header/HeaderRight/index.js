import React from "react";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import usFlag from  "../../../assets/images/us-flag.svg"
import caFlag from  "../../../assets/images/ca-flag.svg"

export default function HeaderRight({country, loggedIn}){
  return(
    <div className={"header-right-cont"}>
      <FiSearch/>
      <img className={"header-country"} src={country.toLowerCase().includes("us")?usFlag:caFlag} alt={"Country"}/>
      <FiShoppingBag/>
      { loggedIn ? <div className={"header-logged-in-user-cont"}><p>Hi Diane Lee</p><p>My Account</p></div>: <FiUser/>}
    </div>
  )
}

HeaderRight.defaultProps = {
      country: "us",
      loggedIn: true,
};
