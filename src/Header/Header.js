import React from "react";
import "./Header.css";
import logo from "../Images/logo.png";
import Main_Top_Pic from "../Images/Main_Top_Pic.png";

export default function Header(props) {
	return (
		<main className='header'>
			<header>
				<img src={logo} alt='Company logo AE'></img>
				<h1 id='title'>Active Electric Co.</h1>
			</header>
			<div className='headImgContainer'>
				<img
					id='headerImg'
					src={Main_Top_Pic}
					alt='Beutiful employee lounge and kitchen'
				></img>
			</div>
			<div>
				<p id='headerSaying'>
					We work as partners with our clients to accomplish their needs through
					our abilities.
				</p>
			</div>
		</main>
	);
}
