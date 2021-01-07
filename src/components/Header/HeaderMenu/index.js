import React from "react";

export default function HeaderMenu({menu, setShow, setCurrentMenu}){
  return(
    <div className={"header-menu-cont"}>
      {menu.map((o, i)=>{
        return(
        <p
          key={i}
          className={o.title+"-menu"}
          style={o.red&&{color:"#f06f4d"}}
          onMouseEnter={()=>{setCurrentMenu(i); setShow(true)}}
          onMouseLeave={()=>{setShow(false)}}
          onClick={()=>{
            if (o.link){

            } else {
              setCurrentMenu(i); setShow(true)
            }
          }}
        >{o.title}</p>
        )
      })}
    </div>
  )
}

HeaderMenu.defaultProps = {
  menu: [
    {title: "Shop",
      link: "",
      submenu: {
        row: 2,
        column: 4,
        content: [
          { title: "Living Room",
            titleLink: "/mid-century-modern-living-room",
            row: "1/3",
            column: "1/2",
            menus: [
              {title: "Sofas", link: "/modern-sofas"},
              {title: "Sectionals", link: "/modern-sofas"},
              {title: "Modular Sectionals", link: "/modern-sofas"},
              {title: "Lounge & Armchairs", link: "/modern-sofas"},
              {title: "Coffee Tables", link: "/modern-sofas"},
              {title: "Side Tables", link: "/modern-sofas"},
              {title: "TV Stands", link: "/modern-sofas"},
              {title: "Credenzas", link: "/modern-sofas"},
              {title: "Benches & Ottomans", link: "/modern-sofas"},
              {title: "Daybeds", link: "/modern-sofas"},
            ]
          },
          { title: "Bedroom",
            titleLink: "/mid-century-modern-living-room",
            row: "1/2",
            column: "2/3",
            menus: [
              {title: "Beds", link: "/modern-sofas"},
              {title: "Nightstands", link: "/modern-sofas"},
              {title: "Dressers", link: "/modern-sofas"},
              {title: "Bedding", link: "/modern-sofas"},
            ]
          },
          { title: "Dining Room",
            titleLink: "/mid-century-modern-living-room",
            row: "1/2",
            column: "3/4",
            menus: [
              {title: "Dining Tables", link: "/modern-sofas"},
              {title: "Dining & Side Chairs", link: "/modern-sofas"},
              {title: "Bar & Counter Stools", link: "/modern-sofas"},
              {title: "Sideboards", link: "/modern-sofas"},
            ]
          },
          { title: "Decor",
            titleLink: "/mid-century-modern-living-room",
            row: "1/2",
            column: "4/5",
            menus: [
              {title: "Rugs & poufs", link: "/modern-sofas"},
              {title: "Mirrors", link: "/modern-sofas"},
              {title: "Pillows", link: "/modern-sofas"},
            ]
          },
          { title: "Office",
            titleLink: "/mid-century-modern-living-room",
            row: "2/3",
            column: "3/4",
            menus: [
              {title: "Office Desks", link: "/modern-sofas"},
              {title: "Office Chairs", link: "/modern-sofas"},
              {title: "Office Storage", link: "/modern-sofas"},
            ]
          },
          { title: "Decor",
            titleLink: "/mid-century-modern-living-room",
            row: "2/3",
            column: "4/5",
            menus: [
              {title: "Outdoor Tables", link: "/modern-sofas"},
              {title: "Office Chairs", link: "/modern-sofas"},
              {title: "office Modulars", link: "/modern-sofas"},
            ]
          }
        ]
      }
    },
    {title: "Sale",
      red: true,
      link: "",
      submenu: {
        row: 1,
        column: 1,
        content: [
          { title: "Featured",
            titleLink: "/mid-century-modern-living-room",
            row: "auto",
            column: "auto",
            menus: [
              {title: "Home Refresh Sale", link: "/modern-sofas"},
              {title: "Most Popular", link: "/modern-sofas"},
              {title: "Clearance", link: "/modern-sofas"}
            ]
          }
        ]
      }
    },
    {title: "Lifestyle",
      link: "/lookbook",
      submenu: {}
    },
    {title: "Discover",
      link: "",
      submenu: {
        row: 1,
        column: 2,
        content: [
          { title: "Inspiration",
            titleLink: "/mid-century-modern-living-room",
            row: "auto",
            column: "auto",
            menus: [
              {title: "Videos", link: "/modern-sofas"},
              {title: "Journal", link: "/modern-sofas"},
              {title: "Shop the Look", link: "/modern-sofas"},
              {title: "#myRove Gallery", link: "/modern-sofas"}
            ]
          },
          { title: "About",
            titleLink: "/mid-century-modern-living-room",
            row: "auto",
            column: "auto",
            menus: [
              {title: "Our Story", link: "/modern-sofas"},
              {title: "Materials", link: "/modern-sofas"},
              {title: "Membership", link: "/modern-sofas"},
              {title: "Trade Program", link: "/modern-sofas"}
            ]
          }
        ]
      }}
  ]
};
