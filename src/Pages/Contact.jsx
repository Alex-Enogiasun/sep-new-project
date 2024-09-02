import React from "react";
import Navbar from "../Components/Navbar";
const Contact = () => {
	return (
		<>
			<Navbar />
			<div className="contact-container">
				<h1>Contact Us Today</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
					asperiores! Soluta alias impedit suscipit adipisci porro, beatae
					pariatur, nisi odio quaerat laudantium itaque accusamus quam similique
					nihil nemo exercitationem! Earum!
					
				</p>
				<p className="email">
					<a href="mailto: alexjaunty1@gmail.com" class="email-link">
						Email us
					</a>
				</p>
			</div>
		</>
	);
};

export default Contact;
