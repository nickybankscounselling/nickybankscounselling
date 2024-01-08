import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
	const form = useRef();
	
	const [contact, setContact] = useState({});
	const [button, setButton] = useState("Submit");
	
	const handleChange = (event) => {
		const data = {
			...contact,
			[event.target.name]: event.target.value
		}
		setContact(data);
	}
	
	const handleClick = (event) => {
		event.preventDefault();
		setButton("Sending...");
		
		emailjs.sendForm('service_w939o5q', 'template_r5xeorc', form.current, 'LpZBvIHaKa3icIkGq')
		.then(function(response) {
		   console.log('SUCCESS!', response.status, response.text);
		   setButton("Sent!");
		}, function(error) {
		   console.log('FAILED...', error);
		})
	};
	
	return(
			<div>
				<div className="contact-socials">
					<a href="https://www.instagram.com/nickybankscounselling"><i
							className="fa-brands fa-instagram fa-lg social-links"></i></a>
					<a href="https://www.facebook.com/nickybankscounselling"><i
							className="fa-brands fa-facebook fa-lg social-links"></i></a>
				</div>
				
				<form ref={form} onSubmit={handleClick} className={'contact-form'}>
					<div className="row mb-3">
						<label className="col-sm-2 col-form-label">Your name</label>
						<div className="col-sm-10">
							<input className="form-control" type="text" name="clientName" onChange={handleChange}/>
						</div>
					</div>
					
					<div className="row mb-3">
						<label className="col-sm-2 col-form-label">Your email</label>
						<div className="col-sm-10">
							<input className="form-control" type="email" name="clientEmail" onChange={handleChange}/>
						</div>
					</div>
					
					<div className="row mb-3">
						<label className="col-sm-2 col-form-label">Your phone</label>
						<div className="col-sm-10">
							<input className="form-control" type="tel" name="clientPhone" onChange={handleChange}/>
						</div>
					</div>
					
					<div className="mb-3">
						<label className="form-label">Details for counselling enquiry</label>
						<textarea className="form-control" rows="8" onChange={handleChange} name="clientMessage"></textarea>
					</div>
					
					<button className="button contact-input" type="submit" onSubmit={handleClick}>{button}</button>
				</form>
			</div>
	);
}
