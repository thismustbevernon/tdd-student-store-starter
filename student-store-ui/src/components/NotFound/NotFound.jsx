import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import "./NotFound.css"


export default function NotFound(){
    return (
        <div className="notFound">
            
            <Navbar />
            <Sidebar />
            <p className="notAvail">Error 404: NOT FOUND</p>
            </div>
            )
}
