import React from "react";
import trollface from './trollface.png'

export default function Header(){
    return (
        <header className="header">
            <img className="header_image" src={trollface}/>
            <h2 className="header_title">Meme generator</h2>
        <h4 className="header_project">React Course -Project-3</h4>
        </header>
    )
}