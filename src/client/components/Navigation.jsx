function Navigation() {
	return (
		<div>
			<nav className="navbar bg-light navbar-expand-lg navbar-light">
				<nav className="navbar bg-body-tertiary">
					<div className="container-fluid">
						
						<a className="navbar-brand" href="/">
							<img id="nav-logo" src="images/logo.png" alt="Logo" width="50" height="auto" className="d-inline-block align-baseline"/>
							Nicky Banks Counselling
						</a>
						
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="nav">
								<li className="nav-item">
									<a className="nav-link" href="/">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/src/client/pages/Services">Services</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/src/client/pages/About">About Me</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/src/client/pages/FAQ">FAQ</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="/src/client/pages/Contact">Contact</a>
								</li>
								<li className="nav-item">
									<div className="nav-link nav-socials">
										<a href="https://www.instagram.com/nickybankscounselling"><i className="fa-brands fa-instagram"></i></a>
									</div>
								</li>
								<li className="nav-item">
									<div className="nav-link nav-socials">
										<a href="https://www.facebook.com/nickybankscounselling"><i className="fa-brands fa-facebook"></i></a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</nav>
		</div>
	);
}

export default Navigation;