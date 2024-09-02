import React from "react";
import Navbar from "../Components/Navbar";

const About = () => {
	return (
		<>
			<Navbar />
			<div className="about-container">
				<h1>About Us</h1>
				<p>
					Welcome to our website! We are dedicated to providing the best service
					and information about our products and services. Our mission is to
					deliver quality and excellence in everything we do.
				</p>
				<h2>Our Vision</h2>
				<p>
					Our vision is to be the leading company in our industry, known for
					innovation, customer satisfaction, and community involvement.
				</p>
				<h2>Our Team</h2>
				<p>
					We have a team of dedicated professionals who are passionate about
					their work and committed to our mission and values. Meet our team
					members and learn more about their roles in our success.
				</p>
			</div>
		</>
	);
};

export default About;
