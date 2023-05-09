import List from "../content/covidPolicy/List.jsx";
import Policy from "../content/covidPolicy/Policy.jsx";

export default function CovidPolicy() {
	return(
			<div>
				<section>
					<h1 className="page-title">COVID-19 Policy</h1>
					
					<p className="below-intro">Below are the procedures I will be following to minimise risk to
						everyone:</p>
					<List />
					
					<Policy />
					
					<p>This policy is consistently under review and was last updated on 09/05/23.</p>
				</section>
			</div>
	);
}
