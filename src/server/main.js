import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import { SMTPClient } from 'emailjs';

// App

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

// Email Client

const client = new SMTPClient({
	user: 'hello@nickybankscounselling.com',
	password: 'Symonds21!',
	host: 'smtp.dreamhost.com',
	ssl: true,
});

// API Requests

app.route("/api/contact")
		.post(async function (req, res) {
			const data = req.body;
			let emailContent = "Name: " + data.clientName + " \nEmail: " + data.clientEmail + "\n\nMessage: \n\t" + data.clientMessage;

			await client.send(
				{
					text: emailContent,
					from: 'Website <hello@nickybankscounselling.com>',
					to: '<hello@nickybankscounselling.com>',
					subject: "Counselling Enquiry",
				},
				(err, message) => {
					console.log(err || message);
				}
			)
		})

// Server

ViteExpress.listen(app, 3000, () =>
    console.log("Server is listening on port 3000...")
);
