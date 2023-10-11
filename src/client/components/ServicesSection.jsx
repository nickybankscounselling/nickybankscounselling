export default function ServicesSection({boxStyle}) {
	return (
			<div className={"row justify-content-between"}>
				<div className={"col-md-4 services-types " + boxStyle}>
					<i className="fa-regular fa-user-group fa-2xl services-icons"></i>
					<h3 className="services-heading">In Person</h3>
					<p>In a confidential space near Andover, Hampshire.</p>
					<p>50 mins / £50</p>
					<p><em><a href="/counselling-room">Read more</a></em></p>
				</div>
				
				<div className={"col-md-4 services-types " + boxStyle}>
					<i className="fa-solid fa-video fa-2xl services-icons"></i>
					<h3 className="services-heading">Online</h3>
					<p>Online sessions are offered via Zoom.</p>
					<p>50 mins / £50</p>
				</div>
				
				<div className={"col-md-4 services-types " + boxStyle}>
					<i className="fa-solid fa-phone fa-2xl services-icons"></i>
					<h3 className="services-heading">Telephone</h3>
					<p>For greater flexibility of location.</p>
					<p>50 mins / £50</p>
				</div>
			</div>
	)
}
