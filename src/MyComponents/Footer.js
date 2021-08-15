import React from 'react'


export const Footer = ()=>{

    let footerStyle = {
        position:"relative",
        top:"50vh",
        width:"100%",
        border:"solid green"
    }
    return(
        <footer className="bg-dark text-light py-3"
         style={footerStyle}>
            <p className= "text-center">
            Coopyright &copy; mytodoslist.com
            </p>
        </footer>
    )
}