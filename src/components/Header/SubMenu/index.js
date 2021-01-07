import React, {useState} from "react";

/**
 * @return {null}
 */

export default function SubMenu({content, show}) {
  if (content){
    return(
      <div
        className={"sub-menu-cont"}
        style={{display:!show && "none", gridTemplateColumns: "repeat(" + content.column + ", auto",  gridTemplateRows: "repeat(" + content.row + ", auto)"}}>
        {content.content.map((o,i)=>{
          return(
            <div
              key={i}
              className={"sub-menu-list-cont"}
              style={{gridRow: o.row?o.row:"auto/auto", gridColumn: o.column?o.column:"auto/auto"}}
            >
              <p className={"sub-menu-list-title"}>{o.title}</p>
              <div className={"sub-menu-list"}>
                {o.menus.map((val, index)=>{
                  return <p key={index} className={"sub-menu-item"}>{val.title}</p>
                })}
              </div>
            </div>
          )
        })}
      </div>
    )
  } else {
    return null;
  }

}
