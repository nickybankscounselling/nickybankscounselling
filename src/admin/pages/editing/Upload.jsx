import axios from "axios";
import { useState } from "react";
import {Navigate} from "react-router-dom";

export function Upload({ variables }) {
	
	const [image, setImage] = useState({});
	const [success, setSuccess] = useState("");
	
	const handleSubmit = ( event ) => {
		event.preventDefault();
		axios.post("/api/images", image, { headers: { "Content-Type": "multipart/form-data" }})
				.then(res => {
					if (res.data.imageId !== undefined) {
						setSuccess("Successfully uploaded! Redirecting to images...")
						
						setTimeout(() => {
							return <Navigate to={`/${ variables.adminPath }/images`} replace state={{path: location.pathname}}/>
						}, 2000)
					} else {
						console.log(res);
						setSuccess("Upload failed, please try again.")
					}
				})
	}
	
	return (
			<div>
				<form onSubmit={handleSubmit} encType={"multipart/form-data"}>
					<input type="file" name="image" onChange={ e => setImage({ image: e.target.files[0] }) }/>
					<button type="submit">Upload</button>
				</form>
				
				<p>{success}</p>
			</div>
	)
}