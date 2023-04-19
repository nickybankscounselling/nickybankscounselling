import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
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
								<p>How you receive your counselling is a individual choice and will vary from person to
									person. I would be pleased
									to welcome you to my counselling room near Andover, but I equally understand and
									respect the advantages that
									telephone and online counselling offer. I have chosen to use Zoom for my online
									sessions. I currently work from
									Tuesdays to Fridays from 8am – 8pm and on Saturday morning between 9am and 12pm.</p>
								<p>In advance of the first counselling session being confirmed, I offer a 20 minute
									initial consultation free of
									charge. This is to check a number of factors to ensure that we both feel that we
									would be a good fit to work
									together, such as your reasons for considering counselling and what to expect during
									your counselling experience.
									This consultation takes place over the phone or on Zoom.</p>
							</div>
						</div>
						
						<div className="row justify-content-between below-intro">
							<div className="col-md-4 services-types">
								<i className="fa-regular fa-user-group fa-2xl services-icons"></i>
								<h3 className="services-heading">In Person</h3>
								<p>In a confidential space near Andover, Hampshire.</p>
								<p>50 mins / £45</p>
								<p><em><a href="/counselling-room" className="homepage-links">Read more</a></em></p>
							</div>
							
							<div className="col-md-4 services-types">
								<i className="fa-solid fa-video fa-2xl services-icons"></i>
								<h3 className="services-heading">Online</h3>
								<p>Online sessions are offered via Zoom.</p>
								<p>50 mins / £45</p>
							</div>
							
							<div className="col-md-4 services-types">
								<i className="fa-solid fa-phone fa-2xl services-icons"></i>
								<h3 className="services-heading">Telephone</h3>
								<p>For greater flexibility of location.</p>
								<p>50 mins / £45</p>
							</div>
						</div>
					</div>
				</section>
				
				<section className="content container-fluid contact">
					<h2 className="subheading">Contact</h2>
					<ContactForm onSubmit={handleSubmit}/>
				</section>
			</div>
	);
}

export default Home;