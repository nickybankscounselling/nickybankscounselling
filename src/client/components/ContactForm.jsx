import {useState} from "react";
import axios from "axios";

function ContactForm() {
	
	const [clientName, setName] = useState();
	const [clientEmail, setEmail] = useState();
	const [clientMessage, setMessage] = useState();
	
	function handleName(event) {
		setName(event.target.value);
	}
	
	function handleEmail(event) {
		setEmail(event.target.value);
	}
	
	function handleMessage(event) {
		setMessage(event.target.value);
	}
	
	const handleClick = (event) => {
		event.preventDefault();
		
		axios.post('/api/contact', {
			clientName: clientName,
			clientEmail: clientEmail,
			clientMessage: clientMessage
		  })
		  .then(function (response) {
			console.log(response);
		  })
		  .catch(function (error) {
			console.log(error);
		  });
	};
	
	return(
			<div>
				<div className="contact-socials">
					<a href="https://www.instagram.com/nickybankscounselling"><i
							className="fa-brands fa-instagram fa-lg social-links"></i></a>
					<a href="https://www.facebook.com/nickybankscounselling"><i
							className="fa-brands fa-facebook fa-lg social-links"></i></a>
				</div>
				
				<form>
					<label className="contact-label">Your name</label><br/>
					<input
							className="contact-input"
							type="text"
							name="clientName"
							value={clientName}
							onInput={handleName}
					/><br/>
					
					<label className="contact-label">Your email</label><br/>
					<input
							className="contact-input"
							type="email"
							value={clientEmail}
							onInput={handleEmail}
					/><br/>
					
					<label className="contact-label">Details for counselling enquiry</label><br/>
					<textarea
							className="contact-textarea"
							rows="8"
							cols="30"
							value={clientMessage}
							onInput={handleMessage}
					></textarea><br/>
					
					<button
							className="button contact-input"
							type="button"
							onClick={handleClick}
					>
						Submit
					</button>
				</form>
			</div>
	);
}

export default ContactForm;