export default function Footer() {
	return (
			<div id="footer" className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-sm-4 badges">
						<img src="images/bacp-badge.png" alt="bacp-badge" height="150" className="badges" />
					</div>
					<div className="col-sm-4 badges">
						<img src="images/otc-badge.png" alt="otc-badge" height="150" className="badges" />
					</div>
				</div>
				
				<p className="copyright">Copyright © Nicky Banks Counselling 2023 <a href="/privacy-policy" className="homepage-links">
					Privacy Policy</a></p>
			</div>
	);
}
