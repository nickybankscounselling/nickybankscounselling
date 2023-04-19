import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function ThankYou() {
	return(
			<div>
				<section className="content-center thank-you">
					<div className="card thank-you-bg">
						<div className="card-body">
							<h2 className="card-title">Thank you!</h2>
							<p className="card-text">Thank you for contacting me. I will get back to you as soon as possible.</p>
							<a href="/" className="button thank-you-button">Go home</a>
						</div>
					</div>
				</section>
			</div>
	);
}

export default ThankYou;