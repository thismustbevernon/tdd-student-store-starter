import * as React from "react"
import "./NotFound.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

export default function NotFound(){
    return (
        <div className="notFound">
            
            <Navbar />
            <Sidebar />
            <p className="notAvail">Error 404: NOT FOUND</p>
            </div>
            )
}
