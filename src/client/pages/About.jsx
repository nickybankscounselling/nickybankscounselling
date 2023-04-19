import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function About() {
	return(
			<div>
				<section>
					<h1 className="page-title">About Me</h1>
					
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-5">
								<img src="images/about-image.png" alt="about-nicky-banks" width="370" className="featured-image" />
							</div>
							<div className="col-md-7 align-self-center">
								<p>I am a mum to two young adults. As a stay-at-home mum, I knew that when I went back
									to work, I wanted to find a
									new career that I was passionate about and I feel so lucky to have found it.</p>
								<p>I have spent the past several years retraining as a counsellor. I volunteered as a
									counsellor at the local women’s
									refuge, both during my training and afterwards.</p>
								<p>Now I’ve finished studying, I’m looking forward to spending time attending live
									theatre and music venues in the
									coming months now they are more easily accessible.</p>
							</div>
						</div>
					</div>
					
					<h2 className="below-intro subtitle">How did I become a counsellor?</h2>
					
					<p>A number of life experiences and choices led me to an introductory course in Counselling Skills
						although my lack of self-confidence
						and anxiety within a learning environment meant that it took two years to submit the application
						form! The course piqued my
						interest as something to be explored further and I knew that, in some form, I had found my new
						career. </p>
					<p>With hindsight, becoming a qualified counsellor has been signposted to me both consciously and
						unconsciously over the years.
						It links to my previous job as an Account Manager through my desire to work in partnership with
						people to find the resources
						and skills needed to help them achieve a less stressful, more positive way of living or working.
						I have also personally witnessed
						the impact a compassionate listener can have and I felt that this was a world of which I wanted
						to gain a greater understanding.</p>
					<p>I am excited to offer clients face-to-face sessions in my new <a href="/counselling-room">
						counselling room near Andover</a>.</p>
					
					<h2 className="subtitle">Counselling Qualifications</h2>
					
					<ul>
						<li>Level 2 Certificate in Counselling Skills</li>
						<li>Level 3 Diploma in Counselling Skills</li>
						<li>Foundation Degree in Humanistic Counselling (Based on Transactional Analysis)</li>
					</ul>
					
					<p>I am a registered member of the British Association for Counselling and Psychotherapy. This means
						that I work with accordance
						with the <a
								href="https://www.bacp.co.uk/events-and-resources/ethics-and-standards/ethical-framework-for-the-counselling-professions/">
							BACP ethical framework</a>. I am also registered with the Information Commissioner’s Office
						and follow their GDPR policies.</p>
				</section>
			</div>
	);
}

export default About;