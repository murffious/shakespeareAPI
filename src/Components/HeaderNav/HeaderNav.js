import React from 'react'
import './HeaderNav.css'

export default function HeaderNav() {
	return (
       <div className="mainHeaderNavWrap">
           <div className="navContainer">
                <img src= {require("../../assets/logo.png")} alt="drama logo" className="logo" />
                <img src= {require("../../assets/header-name.png")} alt="drama logo" className="haleCenterName" />
           </div> 

       </div>
	)
}
