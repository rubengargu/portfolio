import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/tech.css";

export const Tech = () =>{
    return(
    <div>
        <h2>Que tecnologías conozco</h2>
        <p>Los lenguajes que conozco y trabajo con ellos son:</p>
       <ul>
            <li>HTML</li>
            <li className="css-tech">CSS</li>
            <li className="js-tech">Javascript</li>
            <li className="python-tech">Python</li>
        </ul>
        <p>Los frameworks también son importantes, por ello me he formado en diversos de ellos</p>
        <ul>
            <li className="css-tech">Bootstrap</li>
            <li className="js-tech">Vue</li>
            <li className="js-tech">React</li>
            <li className="python-tech">Flask</li>
        </ul>  
        <p>Otros conocimientos importantes:</p>
            <ul>
                <li>Canva: Esto me ayuda a la hora de crear mis diseños.</li>
                <li>MySql:Me ayuda a gestionar las Bases de Datos.</li>
            </ul>  
    </div>
    )
}
