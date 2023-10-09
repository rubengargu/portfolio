import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/main.css";
import foto from "../../img/foto-perfil.png"

export const Main =()=>{
    
    return(
        
        <div className="center">
            <ul>
                <div className="balloon">
                <li><Link to="/whoAm">Quien soy y que hago</Link></li>
                </div>
                <div className="balloon-2">
                <li><Link to="/tech">Que tecnologías conozco</Link></li>
                </div>
                <div className="balloon-3">
                <li><Link to="/work">Donde he trabajado</Link></li>
                </div>
                <div className="balloon-4">
                <li><Link to="/projects">Mis proyectos</Link></li>
                </div>
                
            </ul>
            <img src={foto}></img>
        </div>
    )
}

