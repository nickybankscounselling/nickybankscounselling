import ContactForm from "../components/ContactForm";
import ServicesSection from "../components/ServicesSection.jsx";
import ServicesIntro from "../content/ServicesIntro.jsx";

export default function Home() {
	return(
			<div>
				<section>
					<div className="container-fluid">
						<h1 className="page-title">Services</h1>
						
						<div className="row justify-content-center services-page-intro">
							<div className="col-md-5">
								<img src="images/services-image.jpg" alt="counselling-services" className="featured-image" />
							</div>
							<div className="col-md-7 align-self-center">
								<ServicesIntro />
							</div>
						</div>
						
						<div className={"below-intro"}>
							<ServicesSection boxStyle={"services-box-page"} />
						</div>
					</div>
					
					<br />
					
					<div style={{margin: "2%"}} >
						<h2 className="subheading below-intro">Contact</h2>
						<ContactForm />
					</div>
				</section>
			</div>
	);
}
