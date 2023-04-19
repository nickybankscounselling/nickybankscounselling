import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Contact() {
	return(
			<div>
				<section className="content container-fluid contact">
					<h1 className="page-title">Contact</h1>
					<ContactForm onSubmit={handleSubmit}/>
				</section>
			</div>
	);
}

export default Contact;