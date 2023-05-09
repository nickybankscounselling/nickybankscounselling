import AboutIntro from "../content/about/AboutIntro.jsx";
import BecomingCounsellor from "../content/about/BecomingCounsellor.jsx";
import Qualifications from "../content/about/Qualifications.jsx";

export default function About() {
	return(
			<div>
				<section>
					<h1 className="page-title">About Me</h1>
					
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-5">
								<img src="images/about-image.png" alt="about-nicky-banks" width="370" height={"100%"}
									 className="featured-image" />
							</div>
							<div className="col-md-7 align-self-center">
								<AboutIntro />
							</div>
						</div>
					</div>
					
					<BecomingCounsellor />
					<Qualifications />
				</section>
			</div>
	);
}
