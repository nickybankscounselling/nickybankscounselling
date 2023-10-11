export default function Footer() {
	return (
			<div id="footer" className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-sm-4 badges">
						<img src="/uploads/bacp-badge.png" alt="bacp-badge" width={"auto"} height="150" className="badges" />
					</div>
					<div className="col-sm-4 badges">
						<img src="/uploads/otc-badge.png" alt="otc-badge" width={"auto"} height="150" className="badges" />
					</div>
				</div>
				
				<p className="copyright">Copyright © Nicky Banks Counselling 2023 // <a href="/privacy-policy">
					Privacy Policy</a></p>
			</div>
	);
}
