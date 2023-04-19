import Navigation from "../components/Navigation";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
	return(
			<div>
				<div id="welcome" className="container-fluid">
					<div className="row content-center">
						<div className="col-md-7 order-2 order-md-1 container-fluid welcome-text">
							<h2 className="subheading content-center">Welcome</h2>
							<p>Hi, I’m Nicky. Welcome to my website.</p>
							<p>I live on the Hampshire/Wiltshire border and offer confidential online and telephone
								counselling to adults across the UK,
								as well as face-to-face counselling to the local community.</p>
							<p>I work with individuals who are feeling “stuck” – who wish to change their life in some
								way to feel stronger and more
								confident in themselves but don’t know where or how to start. Does this sound familiar
								to you? Would you like to explore
								these thoughts and feelings in a supportive and non-judgemental environment? If the
								answer is ‘yes’ to these questions,
								please get in touch to arrange a free initial consultation.</p>
							<p>Previous client work has included such topics as invisible illness (such as
								fibromyalgia), relationship problems,
								emotional eating, the impact of difficult childhood experiences in adulthood, anxiety,
								grief and loss. I have had
								particular experience working with domestic abuse survivors as a counsellor at the local
								women’s refuge.</p>
						</div>
						
						<div className="col-md-5 order-1 order-md-2">
							<img className="profile" src="images/profile.png" alt="profile" />
						</div>
					</div>
				</div>
				
				<div className="container-fluid">
					<div className="services-desc content-center">
						<h2 className="subheading index-heading">Services</h2>
						<p>One-on-one personalised counselling sessions for clients anywhere in the UK, to empower you
							to feel more positive
							about your life, now and in the future.</p>
						<p>I offer a free 20 minute initial consultation to decide whether we would be a good fit to
							work together.</p>
					</div>
					
					<div className="row justify-content-center services-home">
						<div className="col-md-3 services-types services-types-index">
							<i className="fa-regular fa-user-group fa-2xl services-icons"></i>
							<h3 className="services-heading">In Person</h3>
							<p>In a confidential space near Andover, Hampshire.</p>
							<p>50 mins / £45</p>
							<p><em><a href="/counselling-room" className="homepage-links">Read more</a></em></p>
						</div>
						
						<div className="col-md-3 services-types services-types-index">
							<i className="fa-solid fa-video fa-2xl services-icons"></i>
							<h3 className="services-heading">Online</h3>
							<p>Online sessions are offered via Zoom.</p>
							<p>50 mins / £45</p>
						</div>
						
						<div className="col-md-3 services-types services-types-index">
							<i className="fa-solid fa-phone fa-2xl services-icons"></i>
							<h3 className="services-heading">Telephone</h3>
							<p>For greater flexibility of location.</p>
							<p>50 mins / £45</p>
						</div>
					</div>
					
					<div className="row services-home content-center">
						<a href="/src/client/pages/Services" className="visit-services"><button className="button">Visit services</button></a>
					</div>
				</div>
				
				<section className="content-center container-fluid contact">
					<h2 className="subheading">Contact</h2>
					<ContactForm />
				</section>
			</div>
	);
}

export default Home;