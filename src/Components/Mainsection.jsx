import React from "react";
import { FaDownload } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { TbWorldCancel } from "react-icons/tb";
import Footer from "../Components/Footer";
import { GiShadowFollower } from "react-icons/gi";

function Mainsection() {
	return (
		<>
			<div className="wrapper">
				{/*section1 */}
				<div className="section-1">
					<div className="para-section1">
						<p className="ready-para">
							<strong>Ready to join? Seamless Payments</strong>
							<br></br> Value Added Services (VAS) organization that offers
							instant recharge of Airtime, Data Bundle, CableTV (DStv, GOtv &
							Startimes), Electricity Bill Payment, Recharge Card Printing and
							so much more to our customers.
						</p>
						<p className="numbers-of-users">
							<img
								src="./images/image.png"
								alt="user-image"
								width="200"
								height="100"
								className="users-image"
							/>
							4.8K+ Used this App
						</p>
					</div>
					<div className="phone-image-container">
						<img
							src="./images/mobile-phone.GIF"
							srcSet="./images/mobile-phone.GIF"
							sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 1200px"
							alt="mobile-phone"
							className="mobile-phone-image"
						/>
					</div>
				</div>

				<div className="wave-section">
					<img src="./images/gif.GIF" alt="gif" width="100%" height="150" />
				</div>
				{/*section2 */}
				<div className="section-2">
					<div className="image-container2">
						<img
							src="./images/officepic.jpg"
							alt="mobile-phone"
							width="600"
							height="600"
							className="office-pic"
						/>
					</div>
					<div className="focus-section">
						<div className="focus-text">
							<p>
								<strong>We focus on quality, never focus on quantity</strong>
								<br></br>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eligendi, itaque reiciendis illum eveniet dicta ea incidunt
								excepturi. Omnis
							</p>
						</div>
						<div className="focus-section-div">
							<div className="focus-section1">
								<div className="info">
									<div className="inner-circle">
										<FaDownload />
									</div>
									2K+ Download
								</div>
								<div className="info">
									<div className="inner-circle2">
										<GiShadowFollower />
									</div>
									25K+ Followers
								</div>
							</div>

							<div className="focus-section2">
								<div className="info">
									<div className="inner-circle">
										<MdOutlineRateReview />
									</div>
									1500+ Review
								</div>

								<div className="info">
									<div className="inner-circle">
										<TbWorldCancel />
									</div>
									4+ Countries
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Mainsection;
