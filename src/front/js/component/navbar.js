import React from "react";
import { Link } from "react-router-dom";
import  "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<header>
		
		<nav className="navbar navbar-expand-lg navbar-light fixed-top mask-custom shadow-0">
		  <div className="container">
		
			<button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
			  data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
			  aria-label="Toggle navigation">
			  <i className="fas fa-bars"></i>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			  <ul className="navbar-nav me-auto">
				<li className="nav-item">
				  <a className="nav-link" href="#!">Mis proyectos</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#!">Features</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#!">Portfolio</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#!">Reference</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#!">About</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#!">Team</a>
				</li>
				<li className="nav-item">
				  <a className="nav-link" href="#!">Contact</a>
				</li>
			  </ul>
			  <ul className="navbar-nav d-flex flex-row">
				<li className="nav-item me-3 me-lg-0">
				  <a className="nav-link" href="#!">
					<i className="fas fa-shopping-cart"></i>
				  </a>
				</li>
				<li className="nav-item me-3 me-lg-0">
				  <a className="nav-link" href="#!">
					<i className="fab fa-twitter"></i>
				  </a>
				</li>
				<li className="nav-item me-3 me-lg-0">
				  <a className="nav-link" href="#!">
					<i className="fab fa-instagram"></i>
				  </a>
				</li>
			  </ul>
			</div>
		  </div>
		</nav>
		
		
		
	  </header>
	);
};
