import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<header>
		
		<nav className="navbar navbar-expand-lg navbar-light mask-custom ">
		  <div className="container nav-hamburger">
			<div className="text-center">
				<button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
			  	data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
			  	aria-label="Toggle navigation">
			  	<i className="fas fa-bars"></i>
				</button>
			</div>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			  <ul className="navbar-nav me-auto">
				<li className="nav-item">
				  <Link to ="who" className="nav-link" href="#!">Quien soy</Link>
				</li>
				<li className="nav-item">
				  <Link to="tech" className="nav-link" href="#!">Mis conocimientos</Link>
				</li>
				<li className="nav-item">
				  <Link to="work" className="nav-link" href="#!">Mi experiencia laboral</Link>
				</li>
				<li className="nav-item">
				  <Link to ="projects" className="nav-link" href="#!">Mis proyectos</Link>
				</li>
				<li className="nav-item">
				  <Link to="contact" href="#!">Contacta conmigo</Link>
				</li>
				
			  </ul>
			 
			</div>
		  </div>
		</nav>
		
		
		
	  </header>
	);
};
