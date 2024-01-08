import {HandleChange} from "../functions/PostData.jsx";

export function SearchBar({ query, setQuery }) {
	
	const handleChange = ( event ) => {
		HandleChange( event, query, setQuery );
	}
	
	return (
			<div>
			
			</div>
	)
}