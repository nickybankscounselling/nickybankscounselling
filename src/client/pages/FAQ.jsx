import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function FAQ() {
	return(
			<div>
				<section>
					<h1 className="page-title">Frequently Asked Questions</h1>
					
					<div className="container-fluid">
						<div className="row faq-intro">
							<div className="col-md-5">
								<img src="images/faq-image.png" alt="faq" width="370" className="featured-image" />
							</div>
							<div className="col-md-7 align-self-center">
								<p>Counselling means many things to many people so the questions that come to mind about
									the counselling process and
									the commitment by both client and counsellor are extremely varied. For this reason,
									I have chosen to briefly answer
									the questions that I am asked the most by potential clients. These are found below.
									Should you have any further
									questions about counselling in general or how we would work together – and you can’t
									find them elsewhere on the
									website – <a href="/src/client/pages/Contact">please get in touch.</a></p>
							</div>
						</div>
					</div>
					
					<h2 className="subheading below-intro">How long will I be having counselling?</h2>
					<p>Counselling sessions are not limited in number. There will be regular reviews and collaborative
						discussion regarding
						progress. This is to understand how you need to feel or see change to know that you are ready to
						end our counselling
						partnership. Sessions take place on a weekly basis and last for 50 minutes. Normally, the
						session is at the same time each
						week although I am able to offer some flexibility, if possible. <a href="src/client/pages/Services">Visit
							services.</a></p>
					
					<h2 className="subheading">What type of counselling do you offer?</h2>
					<p>I am qualified in Humanistic Counselling. This means that our work together is focused on your
						gaining the confidence to
						make decisions that will benefit you in the future. To recognise your strengths and to make the
						best choices to enable you
						to realise your potential. In order to achieve this, we would work together to explore and
						develop strategies to ensure a
						new improved way of living. The partnership between client and counsellor is key to believing
						that change is possible.
						Open and honest communication, mutual trust and respect are all necessary factors to ensure a
						successful outcome.</p>
					<p>The counselling framework that I mostly work within is Eric Berne’s theory of ‘<a
							href="https://www.counselling-directory.org.uk/transactional-analysis?gclid=CjwKCAiApfeQBhAUEiwA7K_UH1FdZjPWcoYl5e89IrmQAMHpf7Ga0arCkr-o7eNzMYoaT5briSTGwRoCCgkQAvD_BwE">
						Transactional Analysis</a>’. This explores human interaction and relationships and, just as
						importantly, the impact that these
						interactions – or transactions – have on how we feel about ourselves. I use this framework to
						help you grow in awareness. How
						you became the person you are today? Did life experiences, events or significant relationships
						give you a particular perspective
						on life? Did you unconsciously adopt strategies to feel ‘OK’ about yourself and your place in
						the world?</p>
					
					<h2 className="subheading">Are the sessions confidential?</h2>
					<p>Sessions are confidential unless there is thought to be risk of harm to you or to others.
						Safeguarding is a crucial element
						of the ethical framework that I adhere to. Some criminal activities which I become aware of
						during a session also require
						me to inform the appropriate agencies.</p>
					<p>Personal information is stored electronically with password protection or, if on paper, in a
						secure locked box. I am the only
						person with access to this documentation. Notes are kept relating to our sessions and are
						available on request.</p>
					
					<h2 className="subheading">What happens in the first session?</h2>
					<p>My objective for the first session is for you to leave feeling pleased that you have taken the
						first step on your counselling
						journey, that you have a basic understanding of the counselling process and that you feel safe
						and comfortable working with me.</p>
					<p>This first session has a number of necessary elements to it. We will be discussing the contract
						and the required commitment
						by both client and counsellor to ensure that the counselling relationship is fruitful. We would
						also look at your reasons
						for registering for counselling – however broad – and what would you like to explore first, the
						main issue on your mind.
						Confidentiality and safeguarding are key topics for the first session. It is also important for
						me to explain the counselling
						process in order to manage your expectations moving forward.</p>
					<p>A risk assessment is also undertaken through discussing how you have been feeling over the past
						week – physically, mentally and
						emotionally. This is reviewed every six to eight weeks. It is designed to help illustrate
						progression in mental wellbeing or
						areas that show a need to potentially review the issues being discussed.</p>
				</section>
			</div>
	);
}

export default FAQ;