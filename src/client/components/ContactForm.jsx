import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
	const form = useRef();
	
	const [contact, setContact] = useState({});
	const [button, setButton] = useState("Submit");
	
	function handleName(event) {
		const newName = {
			...contact,
			clientName: event.target.value
		}
		
		setContact(newName);
	}
	
	function handleEmail(event) {
		const newEmail = {
			...contact,
			clientEmail: event.target.value
		}
		
		setContact(newEmail);
	}
	
	function handleMessage(event) {
		const newMessage = {
			...contact,
			clientMessage: event.target.value
		}
		
		setContact(newMessage);
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
				
				<form ref={form} onSubmit={handleClick}>
					<label className="contact-label">Your name</label><br/>
					<input
							className="contact-input"
							type="text"
							name="clientName"
							onChange={handleName}
					/><br/>
					
					<label className="contact-label">Your email</label><br/>
					<input
							className="contact-input"
							type="email"
							onChange={handleEmail}
							name="clientEmail"
					/><br/>
					
					<label className="contact-label">Details for counselling enquiry</label><br/>
					<textarea
							className="contact-textarea"
							rows="8"
							cols="30"
							onChange={handleMessage}
							name="clientMessage"
					></textarea><br/>
					
					<button
							className="button contact-input"
							type="submit"
							onSubmit={handleClick}
					>{button}</button>
				</form>
			</div>
	);
}
