import Intro from "../content/faq/Intro.jsx";
import Questions from "../content/faq/Questions.jsx";

export default function FAQ() {
	return(
			<div>
				<section>
					<h1 className="page-title">Frequently Asked Questions</h1>
					
					<div className="container-fluid">
						<div className="row faq-intro">
							<div className="col-md-5 featured-image">
								<img src="images/faq-image.png" alt="faq" width="370" height={"auto"}
									 className={"featured-image-mobile"} />
							</div>
							<div className="col-md-7 align-self-center">
								<Intro />
							</div>
						</div>
					</div>
					
					<Questions />
				</section>
			</div>
	);
}
