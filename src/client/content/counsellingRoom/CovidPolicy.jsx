import List from "../covidPolicy/List.jsx";

export default function CovidPolicy() {
	return (
			<div>
				<h2 className="subheading">COVID-19 Policy</h2>
				<p>Even though the UK has now adopted the policy of “<a
						href="https://www.gov.uk/government/publications/covid-19-response-living-with-covid-19">
					living with COVID-19</a>”, to ensure everyone’s safety, I have a COVID-19 policy in place.
					Please <a href="/covid-policy">
						click here</a> to read full policy.</p>
				
				<List />
			</div>
	)
}