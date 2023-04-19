import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function CounsellingRoom() {
	return(
			<div>
				<section>
					<h1 className="page-title">Counselling Room</h1>
					<div className="container-fluid below-intro">
						<p>I have a wheelchair accessible counselling room in a quiet courtyard in a rural setting on
							the outskirts of Andover. It’s
							cosy and comfortable with a window that lets in natural light and fresh air. There is a
							heater and a blanket for your use
							in the colder months of the year. Bathroom facilities are also available. Privacy and
							confidentiality are assured. There
							is plenty of parking directly outside the room.</p>
						
						<div className="content-center">
							<img src="images/counselling-room.jpg" alt="counselling-room"
								 className="counselling-room-img" />
						</div>
						
						<h2 className="subheading">Directions</h2>
						<p>From the roundabout at Dobbie’s Garden Centre, travel towards the A303. Just before the slip
							road heading west towards
							Exeter, there is a tarmacked track to your left signposted ‘Little Ann Bridge Farm’. Turn
							off here and follow the road
							round to the left as you approach the buildings, then turn right into the courtyard. Number
							9 is the annexe directly to
							the right of ‘Retreat Hairdressing, Beauty and Holistic Therapies’, on the left-hand side as
							you enter. There is plenty
							of parking available.</p>
						
						<h2 className="subheading">To ensure confidentiality</h2>
						<p>There are a number of other businesses in Little Ann Bridge Farm, and it is important that
							you feel comfortable when
							arriving and leaving your counselling session. For this reason, I suggest the following:</p>
						<p>If you are driving, please wait in your car until a couple of minutes until your session time
							then sit in the lobby area
							until called. For those arriving on foot, please enter the annexe on arrival and wait in the
							lobby area until called.</p>
						
						<h2 className="subheading">COVID-19 Policy</h2>
						<p>Even though the UK has now adopted the policy of “<a
								href="https://www.gov.uk/government/publications/covid-19-response-living-with-covid-19">
							living with COVID-19</a>”, to ensure everyone’s safety, I have a COVID-19 policy in place.
							Please <a href="/covid-policy">
								click here</a> to read full policy.</p>
						
						<ul>
							<li>The counselling rooms and waiting area will be thoroughly cleaned every day. All
								furniture will be sprayed with
								anti-bacterial spray after each client and door handles wiped.
							</li>
							<li>The window in the counselling room will be open in between client sessions and can
								remain open during the session
								at the request of the client.
							</li>
							<li>Hand sanitiser is available for use.</li>
							<li>The social distancing guidance will be followed within the confines of the room size.
								Clients are welcome to use a
								face mask if desired.
							</li>
						</ul>
					</div>
				</section>
			</div>
	);
}

export default CounsellingRoom;