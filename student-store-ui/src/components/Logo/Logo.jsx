import * as React from "react"
import { NavLink } from "react-router-dom"
import logoImage from "./codepath.f1b3e41a.svg"
import "./Logo.css"


export default function Logo() {
  return (
    <div className="logo">
      <NavLink to="/"><img src={logoImage}/></NavLink>
    </div>
  )
}