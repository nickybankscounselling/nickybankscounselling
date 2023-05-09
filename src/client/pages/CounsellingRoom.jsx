import Intro from "../content/counsellingRoom/Intro.jsx";
import Directions from "../content/counsellingRoom/Directions.jsx";
import Confidentiality from "../content/counsellingRoom/Confidentiality.jsx";
import CovidPolicy from "../content/counsellingRoom/CovidPolicy.jsx";

export default function CounsellingRoom() {
	return(
			<div>
				<section>
					<h1 className="page-title">Counselling Room</h1>
					<div className="container-fluid below-intro">
						<Intro />
						
						<div className="content-center">
							<img src="images/counselling-room.jpg" alt="counselling-room"
								 className="counselling-room-img" />
						</div>
						<br />
						
						<Directions />
						
						<Confidentiality />
						
						<CovidPolicy />
					</div>
				</section>
			</div>
	);
}
