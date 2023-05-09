import ContactForm from "../components/ContactForm";
import ServicesSection from "../components/ServicesSection.jsx";
import Welcome from "../content/home/Welcome.jsx";
import Services from "../content/home/Services.jsx";

export default function Home() {
	return(
			<div>
				<div id="welcome" className="container-fluid">
					<div className="row content-center">
						<div className="col-md-7 order-2 order-md-1 container-fluid welcome-text">
							<Welcome />
						</div>
						
						<div className="col-md-5 order-1 order-md-2">
							<img className="profile" src="images/profile.png" alt="profile" width={"100%"} height={"100%"} />
						</div>
					</div>
				</div>
				
				<div className="container-fluid">
					<div className="services-desc content-center">
						<Services />
					</div>
					
					<div className={"services-home"}>
						<ServicesSection boxStyle={"services-box-index"} />
						
						<a href="/services" className="visit-services">
							<button className="button">Visit services</button>
						</a>
					</div>
				</div>
				
				<div className="content-center container-fluid contact">
					<h2 className="subheading">Contact</h2>
					<ContactForm />
				</div>
			</div>
	);
}
