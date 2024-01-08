import ContactForm from "../components/ContactForm";
import ServicesSection from "../components/ServicesSection.jsx";
import Services from "../components/Services.jsx";
import {useEffect, useState} from "react";
import {getPageById} from "@georginabanks/web-admin/src/client/api.jsx";
import parse from "html-react-parser";

export default function Home() {
	
	const [page, setPage] = useState({});
	
	useEffect(() => {
		getPageById(2).then( res => setPage(res) );
	}, []);
	
	return(
			<div>
				{ page.pageId && (
						<div id="welcome" className="container-fluid">
							<div className="row content-center">
								<div className="col-md-7 order-2 order-md-1 container-fluid welcome-text">
									<h2 className={'welcome-heading'}>Welcome</h2>
									{parse(`<div>${page.content}</div>`)}
								</div>
								
								<div className="col-md-5 order-1 order-md-2 d-flex align-items-center">
									<img className="profile" src={"/uploads/" + page.filename} alt={page.alt} width={"100%"}
										 height={"100%"}/>
								</div>
							</div>
						</div>
				)}
				
				<div className="container-fluid">
					<Services />
					
					<div className={"services-home"}>
						<ServicesSection boxStyle={"services-box-index"} />
						
						<a href="/services" className="visit-services">
							<button className="button">Visit services</button>
						</a>
					</div>
				</div>
				
				<div className="content-center contact">
					<h2 className="homepage-headings">Contact</h2>
					<ContactForm />
				</div>
			</div>
	);
}
