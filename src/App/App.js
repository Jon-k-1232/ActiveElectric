import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Contact from "../ContactUs/Contact";
import Home from "../Home/Home";
import OurStory from "../OurStory/OurStory";
import Services from "../Services/Services";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function App() {
	return (
		<main className='app'>
			<Header />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/contact' component={Contact} />
				<Route path='/ourStory' component={OurStory} />
				<Route path='/services' component={Services} />
			</Switch>
			<Footer />
		</main>
	);
}
