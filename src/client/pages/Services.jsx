import ContactForm from "../components/ContactForm";
import ServicesSection from "../components/ServicesSection.jsx";
import Page from "./Page.jsx";

export default function Services() {
	return(
			<div>
				<Page id={3} />
				
				<section>
					<ServicesSection boxStyle={"services-box-page"} />
					
					<h2 style={{ marginTop: '2rem'}}>Contact</h2>
					<ContactForm />
				</section>
			</div>
	);
}
